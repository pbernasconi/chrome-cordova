/****************************************************************
 * Device Orientation
 */

var running = false;
var timers = {};


function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

var compass = {};

compass.getCurrentHeading = function (successCallback, errorCallback, options) {

    var data = {
        magneticHeading: getRandomFloat(0, 359.99),
        trueHeading: getRandomFloat(0, 359.99),
        headingAccuracy: 5,
        timestamp: (new Date()).getTime()
    };

    successCallback(data);
};

compass.watchHeading = function (successCallback, errorCallback, options) {
    var frequency = (options && options.frequency && typeof options.frequency == 'number') ? options.frequency : 10000;

    var id = 12345;
    running = true;

    var data = {
        magneticHeading: getRandomFloat(0, 359.99),
        trueHeading: getRandomFloat(0, 359.99),
        headingAccuracy: 5,
        timestamp: (new Date()).getTime()
    };

    timers[id] = {
        timer: window.setInterval(function () {
            successCallback(data);
        }, frequency)
    };

    return id;
};

compass.clearWatch = function (id) {
    console.log('id: ' + id);
    console.log('timers id: ' + timers[id]);

    if (id && timers[id]) {
        running = false;
        window.clearInterval(timers[id].timer);
        delete timers[id];
    }
};


navigator.compass = compass;
