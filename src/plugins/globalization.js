/****************************************************************
 * Globalization
 */

var globalization = {};
var language = (navigator.language) ?  navigator.language : "en-US";

globalization.getPreferredLanguage = function (successCallback, errorCallback) {
    successCallback({value: language});
};

globalization.getLocaleName = function (successCallback, errorCallback) {
    successCallback({value: language});
};

globalization.getFirstDayOfWeek = function (successCallback, errorCallback) {
    successCallback({value: 1});
};

globalization.dateToString = function (date, successCallback, errorCallback) {

};

globalization.getCurrencyPattern = function (currencyCode, successCallback, errorCallback) {

};

window.navigator.globalization = globalization;
