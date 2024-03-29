// ==UserScript==
// @version         1.3215
// @name            Youtube - Hide right column
// @description     Hide right column of recommendations and those at the end of the video
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumn.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumn.js
// ==/UserScript==

function hide()
{
	if ( document.querySelector( '#related' ) )
	    document.querySelector( '#related' ).style = 'display: none !important';
}

// content reloaded in ajax ?
setInterval(hide, 20000);

setTimeout( hide, 1000);