function openOptions() {
    var optionsUrl = chrome.extension.getURL('options/options.html');

    chrome.tabs.query({url: optionsUrl}, function (tabs) {
        if (tabs.length) {
            chrome.tabs.update(tabs[0].id, {active: true});
        } else {
            chrome.tabs.create({url: optionsUrl});
        }
    });
}


window.addEventListener('load', function (evt) {

    var githubLink = document.getElementById("github-link");


    var toggleBox = document.getElementById("chkBox");
    var optionsButton = document.getElementById("options");


    githubLink.onclick = function () {
        window.open("https://github.com/pbernasconi/chrome-cordova");
    };


    toggleBox.addEventListener("change", function (e) {
        if (e.target.checked) {
            chrome.storage.sync.set({ "extEnabled": true }, function(){
                //  A data saved callback omg so fancy
            });
        }
        else {
            chrome.storage.sync.set({ "extEnabled": false }, function(){
                //  A data saved callback omg so fancy
            });
        }
    });

    optionsButton.addEventListener("click", function () {
        openOptions();
    }, false);

});
