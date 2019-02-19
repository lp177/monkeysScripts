// ==UserScript==
// @name         	HideTobBarSearchYoutube
// @version      	1.3211
// @description  	try to take over the world!
// @include		    /^http(s)?://(www\.)?youtube\.[a-z]{2,4}/.+$/
// @author			lp177
// @namespace    	https://raw.githubusercontent.com/lp177/monkeysScripts/master/README.md
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideTobBarSearchYoutube.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideTobBarSearchYoutube.js
// ==/UserScript==

var verbose = false;

function airBottom()
{
	if ( document.querySelector( '#top #player' ) )
		document.querySelector( '#top #player' ).setAttribute( 'style', 'margin-bottom: 200px;' );
}

function hide()
{
	document.querySelector( '#masthead-container' ).remove();
	airBottom();
}

// content reloaded in ajax ?
//setInterval(hide, 20000);

setTimeout( hide, 1000);