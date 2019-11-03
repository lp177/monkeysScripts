// ==UserScript==
// @name            Youtube - Hide search bar
// @description     Hide the search bar (on the top of the page) on Youtube
// @namespace    	lp177
// @author       	lp177
// @version         1.3212
// @include         /^http(s)?://(www\.)?youtube\.com/.+$/
// @grant        	none
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideSearchBar.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideSearchBar.js
// ==/UserScript==

function hide()
{
    if ( document.querySelector( '#masthead-container' ) )
		document.querySelector( '#masthead-container' ).remove();

    if ( document.querySelector( '#top #player' ) )
        document.querySelector( '#top #player' ).setAttribute( 'style', 'margin-bottom: 200px;' );
}

// content reloaded in ajax ?
//setInterval(hide, 20000);

setTimeout( hide, 1000);