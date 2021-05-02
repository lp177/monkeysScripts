// ==UserScript==
// @name         	Google search - Remove doodles
// @description  	Remove doodles on google home page
// @author       	lp177
// @namespace    	lp177
// @version      	1.0002
// @match        	https://www.google.fr/
// @match        	https://www.google.com/
// @grant        	none
// @icon         	https://www.google.com/s2/favicons?domain=www.google.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleSearch/removeDoodles.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleSearch/removeDoodles.js
// ==/UserScript==

if ( document.querySelector( 'span.ctr-p a img' ) )
	document.querySelector( 'span.ctr-p a img' ).remove();

if ( document.querySelector( 'div#prm-pt' ) )
	document.querySelector( 'div#prm-pt' ).remove();