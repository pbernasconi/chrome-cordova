/****************************************************************
 * Flashlight
 */

function Flashlight() {
    this._isSwitchedOn = false;
}

Flashlight.prototype = {

    available: function (callback) {
        callback(true);
    },

    switchOn: function (successCallback, errorCallback) {
        this._isSwitchedOn = true;
        successCallback(true);
    },

    switchOff: function (successCallback, errorCallback) {
        this._isSwitchedOn = false;
        successCallback(true);
    },

    toggle: function (successCallback, errorCallback) {
        if (this._isSwitchedOn) {
            this.switchOff(successCallback, errorCallback);
        } else {
            this.switchOn(successCallback, errorCallback);
        }
    }
};

window.plugins.flashlight = new Flashlight();


