(function () {

    'use strict';

    chrome.browserAction.onClicked.addListener(function (tab) {
        openOrFocusOptionsPage();
    });



    function openOrFocusOptionsPage() {
        var optionsUrl = chrome.extension.getURL('options/options.html');
        chrome.tabs.query({}, function(extensionTabs) {
            var found = false;
            for (var i=0; i < extensionTabs.length; i++) {
                if (optionsUrl === extensionTabs[i].url) {
                    found = true;
                    console.log("tab id: " + extensionTabs[i].id);
                    chrome.tabs.update(extensionTabs[i].id, {"selected": true});
                }
            }
            if (!found) {
                chrome.tabs.create({url: "options/options.html"});
            }
        });
    }

})();
