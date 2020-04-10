// ==UserScript==
// @name            Youtube - Hide right column
// @description     Hide right column of recommendations and those at the end of the video
// @namespace    	lp177
// @author       	lp177
// @version         1.3213
// @include         /^http(s)?://(www\.)?youtube\.com/.+$/
// @grant        	none
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