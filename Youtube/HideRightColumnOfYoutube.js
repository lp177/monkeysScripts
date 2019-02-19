// ==UserScript==
// @name            HideRightColumnOfYoutube
// @description     try to take over the world!
// @version         1.3211
// @grant           none
// @include         /^http(s)?://(www\.)?youtube\.[a-z]{2,4}/.+$/
// @author          lp177
// @namespace       https://raw.githubusercontent.com/lp177/monkeysScripts/master/README.md
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumnOfYoutube.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumnOfYoutube.js
// ==/UserScript==

function hide()
{
    document.querySelector( '#related' ).style = 'display: none !important';
    document.querySelector( '.videowall-endscreen' ).remove();
}

// content reloaded in ajax ?
setInterval(hide, 20000);

setTimeout( hide, 1000);