// ==UserScript==
// @name         	Amazon - remove right bar
// @description  	Hide the right basket menu on Amazon
// @author          lp177
// @namespace       lp177
// @version      	1.0001
// @match        	https://www.amazon.fr/*
// @match        	https://www.amazon.com/*
// @grant        	none
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/removeRightBar.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/removeRightBar.js
// ==/UserScript==

(function() {
    'use strict';

    if ( document.querySelector( '#nav-flyout-ewc' ) )
		document.querySelector( '#nav-flyout-ewc' ).remove();

	document.querySelector( 'body' ).setAttribute( 'style', 'padding-right:0;' );
})();