// ==UserScript==
// @version         1.3216
// @name            Youtube - HideClarifyBox
// @description     Hide clarify box below the video on Youtube
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant           none
// @author          lp177
// @namespace       lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideClarifyBox.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideClarifyBox.js
// ==/UserScript==

function hide()
{
	if (document.querySelector('#clarify-box'))
    	document.querySelector('#clarify-box').style = 'display: none !important';
	if (document.querySelector('ytd-info-panel-content-renderer'))
    	document.querySelector('ytd-info-panel-content-renderer').style = 'display: none !important';
}

// content reloaded in ajax ?
setInterval(hide, 20000);
setTimeout( hide, 1000);
