var fs = require('fs');
var pkg = require('../package.json');

module.exports = {
    banner: '/*!\n' +
        ' * ngCordova\n' +
        ' * v' + pkg.version + '\n' +
        ' * Copyright 2014 Drifty Co. http://drifty.com/\n' +
        ' * See LICENSE in this repository for license information\n' +
        ' */\n',

    closureStart: '(function(){\n',
    closureEnd: '\n})();',

    dist: {
        _locales: 'dist/_locales',
        images: 'dist/images',
        scripts: 'dist/scripts'
    },

    pluginFiles: [
        'src/plugins/*.js'
    ],

    src: {
        _locales: 'src/_locales/*',
        images: 'src/images',
        plugins: 'src/plugins/*.js',
        scripts: 'scripts/*.js'
    },

    versionData: {
        version: pkg.version
    }
};
