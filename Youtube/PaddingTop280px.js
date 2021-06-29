// ==UserScript==
// @version         1.3214
// @name            Youtube - PaddingTop280px
// @description     Set a space above the video block on Youtube
// @include         /^http(s)?://(www\.)?youtube\.com/watch.+$/
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/PaddingTop280px.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/PaddingTop280px.js
// ==/UserScript==

document.querySelector( 'body' ).setAttribute( 'style', 'padding-top: 280px' );