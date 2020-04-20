// ==UserScript==
// @name            Youtube - Auto click on auto pause
// @description     Click on the confirm button to unpause the automatic paused video for long time opening window on Youtube
// @namespace    	lp177
// @author       	lp177
// @version         1.0002
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant        	none
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/AutoclickOnAutoPause.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/AutoclickOnAutoPause.js
// ==/UserScript==

function hide()
{
	if ( document.querySelector( '#confirm-button.yt-confirm-dialog-renderer #button' ) )
	    document.querySelector("#confirm-button.yt-confirm-dialog-renderer #button").click()
}

setTimeout( function(){ setInterval(hide, 600000) }, 1000); // Launched only after 10mn useless previous that minimal time