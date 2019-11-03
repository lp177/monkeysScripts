// ==UserScript==
// @name            Youtube - HideClarifyBox
// @description     Hide clarify box below the video on Youtube
// @author          lp177
// @namespace       lp177
// @version         1.3213
// @include         /^http(s)?://(www\.)?youtube\.com/.+$/
// @grant           none
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideClarifyBox.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideClarifyBox.js
// ==/UserScript==

function hide()
{
	if ( document.querySelector( '#clarify-box' ) )
    	document.querySelector( '#clarify-box' ).style = 'display: none !important';
}

// content reloaded in ajax ?
setInterval(hide, 20000);

setTimeout( hide, 1000);