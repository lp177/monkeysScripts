// ==UserScript==
// @version         1.0001
// @name            Youtube - Remove useless download button
// @description     Remove useless download button displayed even if you don't have the paid subscription to be able to use it
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant           none
// @namespace       lp177
// @author          lp177
// @icon            https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveDownloadButton.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveDownloadButton.js
// ==/UserScript==
function hide() {
    document.querySelector("ytd-download-button-renderer")?.remove();
}
setInterval(hide, 1000);
