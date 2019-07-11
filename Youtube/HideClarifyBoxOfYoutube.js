// ==UserScript==
// @name            HideClarifyBoxOfYoutube
// @description     try to take over the world!
// @version         1.3212
// @grant           none
// @include         /^http(s)?://(www\.)?youtube\.com/.+$/
// @author          lp177
// @namespace       https://raw.githubusercontent.com/lp177/monkeysScripts/master/README.md
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideClarifyBoxOfYoutube.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideClarifyBoxOfYoutube.js
// ==/UserScript==

function hide()
{
    document.querySelector( '#clarify-box' ).style = 'display: none !important';
}

// content reloaded in ajax ?
setInterval(hide, 20000);

setTimeout( hide, 1000);
