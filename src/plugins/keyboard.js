var Keyboard = function() {};

Keyboard.isVisible = false;

Keyboard.close = function() {
    this.isVisible = false;
};

Keyboard.show = function() {
    this.isVisible = true;
};

Keyboard.disableScroll = function(bool) { };

if (!window.cordova)
    window.cordova = {};

if (!window.cordova.plugins)
    window.cordova.plugins = {};

if (!window.cordova.plugins.Keyboard)
    window.cordova.plugins.Keyboard = Keyboard;