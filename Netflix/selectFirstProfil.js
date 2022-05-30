// ==UserScript==
// @name         Netflix - Auto select first profil
// @namespace    lp177
// @version      0.0001
// @description  try to take over the world!
// @author       You
// @match        https://www.netflix.com/title/*
// @icon         https://www.google.com/s2/favicons?domain=netflix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	if(document.querySelector('h1.profile-gate-label'))
		document.querySelector('.profile-link').click()
})();