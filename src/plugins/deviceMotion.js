/****************************************************************
 * Device Motion
 */

var running = false;
var timers = {};

var accelerometer = {
    getCurrentAcceleration: function (successCallback, errorCallback, options) {

        var data = {
            x: -4.434294622159458,
            y: 19.345115933827113,
            z: -14.282339264520889,
            timestamp: (new Date()).getTime()
        };

        successCallback(data);
    },

    watchAcceleration: function (successCallback, errorCallback, options) {
        var frequency = (options && options.frequency && typeof options.frequency == 'number') ? options.frequency : 10000;

        var id = 12345;
        running = true;

        function getRandomInt(min, max) {
            return Math.random() * (max - min) + min;
        }

        var data = {
            x: getRandomInt(-4, 0),
            y: getRandomInt(10, 20),
            z: getRandomInt(-10, 0),
            timestamp: (new Date()).getTime()
        };

        timers[id] = {
            timer: window.setInterval(function () {
                successCallback(data);
            }, frequency)
        };

        return id;
    },

    clearWatch: function (id) {
        console.log('id: ' + id);
        console.log('timers id: ' + timers[id]);

        if (id && timers[id]) {
            running = false;
            window.clearInterval(timers[id].timer);
            delete timers[id];
        }
    }
};


navigator.accelerometer = accelerometer;
