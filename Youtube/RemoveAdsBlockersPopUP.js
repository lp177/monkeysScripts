// ==UserScript==
// @version         1.0003
// @name            Youtube - Remove adblocker popup
// @description     Remove the popup previous each video who say that ads blockers are forbidden
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveAdsBlockersPopUP.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveAdsBlockersPopUP.js
// ==/UserScript==

function hide()
{
	if ( document.querySelector('#container.ytd-enforcement-message-view-model #dismiss-button') )
	    document.querySelector('#container.ytd-enforcement-message-view-model #dismiss-button').remove()
}

setInterval(hide, 1000);
