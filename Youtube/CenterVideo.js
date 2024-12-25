// ==UserScript==
// @version         1.3214
// @name            Youtube - Center video
// @description     Center the video block (to use with hide right colum / hide chat)
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant           none
// @namespace       lp177
// @author          lp177
// @icon            https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/CenterVideo.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/CenterVideo.js
// ==/UserScript==
document
    .querySelector("#content")
    ?.setAttribute("style", "width: 850px;margin: 0 auto;");
