// ==UserScript==
// @version         1.0004
// @name            Youtube - Remove end screen
// @description     Remove the video proposals wall displayed at the end of each video on Youtube
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant           none
// @namespace       lp177
// @author          lp177
// @icon            https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveEndScreen.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveEndScreen.js
// ==/UserScript==
function hide()
{
    document.querySelector('.videowall-endscreen,.ytp-fullscreen-grid')?.remove()
}
setInterval(hide, 1000);
