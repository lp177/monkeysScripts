// ==UserScript==
// @name         	Phpmyadmin keeper
// @description  	Keep connection open by reloading shema
// @version      	0.1
// @grant        	none
// @match        	http://127.0.0.1/phpmyadmin/*
// @author			lp177
// @namespace    	https://raw.githubusercontent.com/lp177/monkeysScripts/master/README.md
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/PhpMyAdmin/keeper.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/PhpMyAdmin/keeper.js
// ==/UserScript==

(function() {

    'use strict';

	let delay = 10 * 1000 * 60; /* 10mn in micro secondes */

	var bt = document.querySelector('#pma_navigation_reload');

    setInterval( () => (bt) ? document.querySelector('#pma_navigation_reload').click() : bt = document.querySelector('#pma_navigation_reload') , delay );

})();