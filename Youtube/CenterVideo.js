// ==UserScript==
// @name         	Youtube - Center video
// @namespace    	lp177
// @author       	lp177
// @version      	1.3213
// @description  	Center the video block (to use with hide right colum / hide chat)
// @include			/^http(s)?://(www\.)?youtube\.com/*
// @grant        	none
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/CenterVideo.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/CenterVideo.js
// ==/UserScript==

if (document.querySelector( '#content' ))
	document.querySelector( '#content' ).setAttribute( 'style', 'width: 850px;margin: 0 auto;' );