// ==UserScript==
// @name         	Spotify - text selectable
// @description  	Make album name selectable on Spotify
// @author       	lp177
// @namespace    	lp177
// @version      	1.0002
// @match        	https://open.spotify.com/*
// @grant        	none
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Spotify/textSelectable.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Spotify/textSelectable.js
// ==/UserScript==

// Make selectable switch
function apply177()
{
	if ( document.querySelector( '.mo-info span' ) )
		document.querySelector( '.mo-info span' ).style = 'user-select: all;';
}

// Apply / reaply on new "page"
var pushState = history.pushState;
history.pushState = function () {
    pushState.apply(history, arguments);
	setTimeout( apply177, 300 );
};

setTimeout( apply177, 1000 );
setTimeout( apply177, 100 );