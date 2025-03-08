// ==UserScript==
// @version      2025-03-08
// @name         Medium - Add freedium link
// @description  Add freedium link on medium page
// @tag          paywall
// @namespace    lp177
// @author       lp177
// @grant        none
// @match        https://blog.gopenai.com/*
// @match        https://blog.stackademic.com/*
// @match        https://generativeai.pub/*
// @match        https://javascript.plainenglish.io/*
// @match        https://itnext.io/*
// @match        https://levelup.gitconnected.com/*
// @match        https://medium.com/*
// @match        https://theexpertdeveloper.medium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Freedium/medium.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Freedium/medium.js
// ==/UserScript==
(function () {
    "use strict";
    function update(max_retry = 100) {
        const title = document.querySelector("article + div h2");
        if (title)
            title.innerHTML =
                "Read the best stories at: <a href='https://freedium.cfd/" +
                location.href +
                "' style='font-weigth:bold;text-decoration:underline;'>freedium</a>";
        else if (max_retry > 0) setTimeout(() => update(max_retry - 1), 100);
    }
    update();
})();
