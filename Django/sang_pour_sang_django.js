// ==UserScript==
// @version      0.001
// @name         100% Django
// @description  Django docs - use 100% width
// @match        https://docs.djangoproject.com/*
// @grant        none
// @namespace    lp177
// @author       lp177
// @icon         https://www.google.com/s2/favicons?domain=docs.djangoproject.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Django/sang_pour_sang_django.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Django/sang_pour_sang_django.js
// ==/UserScript==

(function() {
    'use strict';

    if ( document.querySelector( 'div[role="main"]' ) )
		document.querySelector( 'div[role="main"]' ).style = 'width: 100%;';

	if ( document.querySelector( '#version-switcher' ) )
		document.querySelector( '#version-switcher' ).style = 'position: unset';
})();