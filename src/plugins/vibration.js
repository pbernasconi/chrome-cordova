/****************************************************************
 * Vibration
 */

var vibration = {};

vibration.vibrateWithPattern = function (pattern, repeat) {
    repeat = typeof repeat !== 'undefined' ? repeat : -1;
    pattern.unshift(0);
    console.log('Vibrating %d times with pattern %s.', repeat, pattern.toString());
};

vibration.cancelVibration = function () {
    console.log('Cancelling vibration.');
};

vibration.vibrate = function (param) {

    if (param && typeof param === 'number') {
        console.log('Vibrating for %sms.', param);
    }
    else if (typeof param === 'object' && param.length === 1)
    {
        if (param[0] === 0) {
            return this.cancelVibration();
        }

        console.log('Vibrating for %sms.', param[0]);
    }
    else if (typeof param === 'object' && param.length > 1)
    {
        this.vibrateWithPattern(param, -1);
    }
    else {
        this.cancelVibration();
    }
};

window.navigator.notification.vibrateWithPattern = vibration.vibrateWithPattern;
window.navigator.notification.cancelVibration = vibration.cancelVibration;
window.navigator.notification.vibrate = vibration.vibrate;
window.navigator.vibrate = vibration.vibrate;
