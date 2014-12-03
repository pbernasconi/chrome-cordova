/****************************************************************
 * Barcode Scanner
 * link :   https://github.com/wildabeast/BarcodeScanner
 */

var barcodeScanner = {};

barcodeScanner.scan = function (successCallback, errorCallback) {

    var data = {
        text: '102342340234',
        format: 'QR_CODE',
        cancelled: false
    };

    successCallback(data);
};

cordova.plugins.barcodeScanner = barcodeScanner;
