// ==UserScript==
// @version         1.3213
// @name            Youtube - Hide search bar
// @description     Hide the search bar (on the top of the page) on Youtube
// @include         /^http(s)?://(www\.)?youtube\.com/.+$/
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
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