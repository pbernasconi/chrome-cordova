/****************************************************************
 * Globalization
 */

var globalization = {};
var languages = (navigator.languages) ?  navigator.languages : ["en-US", "en"];

globalization.getPreferredLanguage = function (successCallback, errorCallback) {
    successCallback({value: languages[1].toUpperCase()});
};

globalization.getLocaleName = function (successCallback, errorCallback) {
    successCallback({value: languages[0]});
};

globalization.getFirstDayOfWeek = function (successCallback, errorCallback) {
    successCallback({value: 1});
};

globalization.dateToString = function (date, successCallback, errorCallback) {

};

globalization.getCurrencyPattern = function (currencyCode, successCallback, errorCallback) {

};

window.navigator.globalization = globalization;
