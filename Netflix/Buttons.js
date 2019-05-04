// ==UserScript==
// @name         Netflix buttons
// @version      0.2
// @description  Add button history on netflix top bar
// @author       lp177
// @match        https://www.netflix.com/*
// @author          lp177
// @namespace       https://raw.githubusercontent.com/lp177/monkeysScripts/master/README.md
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Netflix/Buttons.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Netflix/Buttons.js
// ==/UserScript==

(function()
{
	'use strict';

	const topBar = document.querySelector('#hd .aro-genre-list ul');

	if ( topBar )
		topBar.insertAdjacentHTML('beforeend', '<li><a href="/viewingactivity">History</a></li>' );

})();
