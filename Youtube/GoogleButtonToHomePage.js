// ==UserScript==
// @version      	1.0002
// @name         	Youtube - button on google homepage go to subscriptions feed
// @description  	Make that the Youtube button on Google home page (top rigth) go to subscriptions instead of Youtube home page
// @match        	https://www.google.fr/
// @match        	https://www.google.com/
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/GoogleButtonToHomePage.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/GoogleButtonToHomePage.js
// ==/UserScript==

if ( document.querySelectorAll( 'a[href^="https://www.youtube.com/"]' ) )
	document.querySelectorAll( 'a[href^="https://www.youtube.com/"]' ).forEach( (el) => el.setAttribute( 'href', 'https://www.youtube.com/feed/subscriptions' ) );