// ==UserScript==
// @name         	Youtube - Hide Chat
// @namespace    	lp177
// @author       	lp177
// @version      	1.3211
// @description  	Hide the chat on Youtube
// @include			/^http(s)?://(www\.)?youtube\.com/watch.+$/
// @grant        	none
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
