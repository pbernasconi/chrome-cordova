/****************************************************************
 * Globalization
 */

var globalization = {};

globalization.getPreferredLanguage = function (successCallback, errorCallback) {
    successCallback({value: "EN"});
};

globalization.getLocaleName = function (successCallback, errorCallback) {
    successCallback({value: "en-US"});
};

globalization.getFirstDayOfWeek = function (successCallback, errorCallback) {
    successCallback({value: 1});
};

globalization.dateToString = function (date, successCallback, errorCallback) {

};

globalization.getCurrencyPattern = function (currencyCode, successCallback, errorCallback) {

};

window.navigator.globalization = globalization;
