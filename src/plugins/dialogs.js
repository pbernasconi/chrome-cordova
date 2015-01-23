/****************************************************************
 * Dialogs
 */

var notification = {};

notification.alert = function (message, callback, title, buttonName) {
    window.alert(message);
    callback();
};


notification.confirm = function (message, callback, title, buttonName) {
    if (window.confirm(message)) {
        callback(1);
    }
    else {
        callback(2);
    }
};

notification.prompt = function (message, callback, title, buttonName, defaultText) {
    var res = window.prompt(message, defaultText);
    if (res !== null) {
        callback({input1: res, buttonIndex: 1});
    }
    else {
        callback({input1: res, buttonIndex: 2});
    }
};

notification.beep = function (frequency) {
    frequency = frequency || 3;
    window.alert('Beep x' + frequency);
};

window.navigator.notification = notification;




