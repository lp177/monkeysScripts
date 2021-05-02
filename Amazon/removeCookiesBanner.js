// ==UserScript==
// @name         	Amazon - remove bottom cookies banner
// @description  	Remove the bottom cookies banner on Amazon
// @author          lp177
// @namespace       lp177
// @version      	1.0002
// @match        	https://www.amazon.fr/*
// @match        	https://www.amazon.com/*
// @grant        	none
// @icon         	https://www.google.com/s2/favicons?domain=www.amazon.com
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/removeCookiesBanner.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/removeCookiesBanner.js
// ==/UserScript==

(function() {
    'use strict';

	function update()
	{
		if ( document.querySelector( '#sp-cc[action^="/cookieprefs"]' ) )
			document.querySelector( '#sp-cc[action^="/cookieprefs"]' ).remove();
	}
	update();
	setTimeout( update, 100 );
	setTimeout( update, 300 );
	setTimeout( update, 600 );
	setTimeout( update, 1000 );
})();
