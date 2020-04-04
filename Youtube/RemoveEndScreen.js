// ==UserScript==
// @name            Youtube - Remove end screen
// @description     Remove the video proposals wall displayed at the end of each video on Youtube
// @namespace    	lp177
// @author       	lp177
// @version         1.0001
// @include         /^http(s)?://(www\.)?youtube\.com/.+$/
// @grant        	none
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveEndScreen.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveEndScreen.js
// ==/UserScript==

function hide()
{
	if ( document.querySelector('.videowall-endscreen') )
	    document.querySelector('.videowall-endscreen').remove()
}

setInterval(hide, 1000);