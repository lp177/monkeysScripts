// ==UserScript==
// @name            Youtube - Auto click on auto pause
// @description     Click on the confirm button to unpause the automatic paused video for long time opening window on Youtube
// @namespace       lp177
// @author          lp177
// @version         1.0003
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/AutoclickOnAutoPause.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/AutoclickOnAutoPause.js
// ==/UserScript==
function hide() {
    document
        .querySelector("#confirm-button.yt-confirm-dialog-renderer #button")
        ?.click();
}
setTimeout(function () {
    setInterval(hide, 1000);
}, 600000); // Launched only after 10mn useless previous that minimal time
