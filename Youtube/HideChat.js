// ==UserScript==
// @version      	1.3212
// @name         	Youtube - Hide Chat
// @description  	Hide the chat on Youtube
// @include			/^http(s)?://(www\.)?youtube\.com/watch.+$/
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideChat.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideChat.js
// ==/UserScript==

function hide()
{
	if ( document.querySelector("#secondary") )
		document.querySelector("#secondary").remove();
}

setInterval(hide, 2000);

hide();
