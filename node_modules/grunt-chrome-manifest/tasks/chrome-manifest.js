'use strict';

var path = require('path');

module.exports = function (grunt) {

  var _ = grunt.util._;

  grunt.registerMultiTask('chromeManifest', '', function () {
    var options = this.options({
      buildnumber: undefined,
      background: null,
      uglify: 'uglify',
      cssmin: 'cssmin',
      indentSize: 4
    });

    // Correct value of option for backwarding compatibility
    if (options.buildnumber === true) {
      options.buildnumber = 'both';
    }

    this.files.forEach(function (file) {
      var src = file.src[0];
      var dest = file.dest;
      var concat = grunt.config('concat') || {};
      var uglify = grunt.config(options.uglify) || {};
      var cssmin = grunt.config(options.cssmin) || {};
      var manifest = grunt.file.readJSON(path.join(src, 'manifest.json'));
      var originManifest = _.clone(manifest, true);
      var buildnumber = manifest.version.split('.');
      var background = null;

      // Detect types of background, app, extension and page
      if (manifest.app && manifest.app.background) {
        background = manifest.app.background;
      } else if (manifest.background && manifest.background.scripts) {
        background = manifest.background;
      }

      if (background) {
        var target = path.join(dest, options.background.target);
        var exclude = options.background.exclude;

        // update concat config for scripts in background field.
        concat.background = {
          src: [],
          dest: target
        };

        // exclude the scripts from concat task
        _.each(background.scripts, function (script) {
          if (_.indexOf(exclude, script) === -1) {
            concat.background.src.push(path.join(src, script));
          }
        });

        // Add concated background js to uglify task
        uglify[target] = target;

        // Change background script in manifest to target script path
        background.scripts = [options.background.target];
      }

      // Add contents scripts and css to uglify and cssmin task
      // Will not add script to concat task.
      // Keep each content scripts for using on different match patterns.
      _.each(manifest.content_scripts, function (contentScript) {
        _.each(contentScript.js, function (js) {
          uglify[path.join(dest, js)] = path.join(src, js);
        });

        _.each(contentScript.css, function (css) {
          cssmin[path.join(dest, css)] = path.join(src, css);
        });
      });

      // Update each grunt configs.
      grunt.config('concat', concat);
      grunt.config(options.cssmin, cssmin);
      grunt.config(options.uglify, uglify);

      // Increase build number that from origin manifest
      if ((/both|dest/).test(options.buildnumber)) {
        var versionUp = function (numbers, index) {
          if (!numbers[index]) {
            grunt.fail.fatal('Build number has overflowing ' + numbers);
            throw 'Build number overflow ' + numbers;
          }
          if (numbers[index] + 1 <= 65535) {
            numbers[index]++;
            return numbers.join('.');
          } else {
            versionUp(numbers, ++index);
          }
        };

        // Update version of dest manifest.json
        manifest.version = versionUp(buildnumber, buildnumber.length - 1);

        // Update version of origin manifest.json
        if (options.buildnumber === 'both') {
          originManifest.version = manifest.version;
          grunt.file.write(path.join(src, 'manifest.json'),
                JSON.stringify(originManifest, null, options.indentSize));
        }

        grunt.log.writeln('Build number has changed to ' + grunt.log.wordlist(buildnumber));
      } else if ((/^\d+(\.\d+){0,3}$/).test(options.buildnumber)) {
        // Set version from string
        manifest.version = options.buildnumber;
        grunt.log.writeln('Build number has changed to ' + manifest.version);
      }

      // Overwrite options
      if (options.overwrite) {
        for (var key in options.overwrite) {
          manifest[key] = options.overwrite[key];
        }
      }

      // Write updated manifest to destination.
      grunt.file.write(path.join(dest, 'manifest.json'),
            JSON.stringify(manifest, null, options.indentSize));
    });
  });
};
