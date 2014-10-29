# grunt-chrome-manifest

> Grunt task for Chrome manifest.json

## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-chrome-manifest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-chrome-manifest');
grunt.registerTask('default', ['chromeManifest:dist']);
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md

## Workflow

chrome-manifest is composed of 3 steps:

- **prepare**: detects `background` and `content_script` javascript and css files in manifest and update the grunt config to run `concat` `cssmin` and `uglify`.
  - `content_scripts` javascript files and excluded 'background' javascript files does not perform the `concat` task.
- **buildnumber**: detects `buildnumber` and increased if set to true.
- **cleanup**: detects javascripts files for develop in manifest and remove them from manifest.json for distribution.

## Documentation

### Example usage
```javascript
chromeManifest: {
  dist: {
    options: {
      buildnumber: 'both',
      background: {
        target: 'scripts/background.js',
        exclude: [
          'background/scripts/chromereload.js'
        ]
      }
    },
    src: 'app',
    dest: 'dist'
  }
};
```

### Config

#### src
**Required**
Type: `String`

Base directory where the origin source files

#### dest
**Required**
Type: `String`

Base directory where the transformed files should be output.

### Options
#### buildnumber
Type: `String` `Boolean` Default: `undefined`, `false`

Auto-increment types. Can be:

  - `dest`: increase build number in dest only
  - `both`: increase build number in both origin and dest
  - `String`: version in [this format](http://developer.chrome.com/apps/manifest/version) 
  - `undefined`, `false`: do not increase build number

#### background

- target: `String`, Relative path of the transformed(`cssmin` and `uglify`) background script.
- exclude: `String`, Javascript files to exclude.

#### overwrite
Type: `Object` Default: `undefined`

Overwrite in manifest keys from object.

## Tests

Grunt currently doesn't have a way to test tasks directly. You can test this task by running `grunt` and manually verify that it works.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php) and copyright Google
