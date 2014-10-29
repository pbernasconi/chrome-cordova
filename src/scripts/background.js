'use strict';

var toggle = false;
chrome.browserAction.onClicked.addListener(function (tab) {
    toggle = !toggle;
    if (toggle) {
        chrome.browserAction.setIcon({path: {
            '38': "images/icon-38-on.png"
        }, tabId: tab.id});
        // chrome.tabs.executeScript(tab.id, {file: "SCRIPT.user.js"});
    }
    else {
        chrome.browserAction.setIcon({path: {
            '38': "images/icon-38-off.png"
        }, tabId: tab.id});
        // chrome.tabs.executeScript(tab.id, {code: "alert()"});
    }
});
