// ==UserScript==
// @name            Youtube - PaddingTop280px
// @description     Set a space above the video block on Youtube
// @namespace    	lp177
// @author       	lp177
// @version         1.3212
// @include         /^http(s)?://(www\.)?youtube\.com/watch.+$/
// @grant        	none
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/PaddingTop280px.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/PaddingTop280px.js
// ==/UserScript==

document.querySelector( 'body' ).setAttribute( 'style', 'padding-top: 280px' );