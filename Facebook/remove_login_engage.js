// ==UserScript==
// @version      0.0001
// @name         Facebook - Remove login engage
// @description  Remove th annoying popo up and header that purpose to login on scroll
// @namespace    lp177
// @author       lp177
// @match        https://*.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Facebook/remove_login_engage.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Facebook/remove_login_engage.js
// ==/UserScript==
(function() {
    'use strict';
    if ( document.querySelector( '#headerArea, #pagelet_growth_expanding_cta' ) )
		document.querySelector( '#headerArea, #pagelet_growth_expanding_cta' ).remove();
})();