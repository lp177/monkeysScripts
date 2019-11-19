// ==UserScript==
// @name         	17Track - check translate by default
// @namespace    	lp177
// @author       	lp177
// @version      	0.0001
// @description  	Check translate checkbox on 17track.net on each track
// @match        	https://t.17track.net/*
// @grant        	none
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/17track/CheckTranslate.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/17track/CheckTranslate.js
// ==/UserScript==

(function() {
    'use strict';

    Array.from(document.querySelectorAll('[yq-data="bindTranslate"]')).forEach(el=>el.click());
})();
