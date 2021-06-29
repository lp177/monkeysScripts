// ==UserScript==
// @version      0.0002
// @name         Ubereat - Focus tracking map, remove useless UI
// @namespace    lp177
// @author       lp177
// @description  Remove header/footer for use as fullscreen tracking map on tracking order page
// @match        https://www.ubereats.com/fr/orders/*
// @match        https://www.ubereats.com/orders/*
// @icon         https://www.google.com/s2/favicons?domain=www.ubereats.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Uber/focus_tracking_map.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Uber/focus_tracking_map.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	function update()
	{
    	if (document.querySelector('footer'))
		{
			document.querySelector('footer').remove();
			if (document.querySelector('#main-content > div:nth-of-type(2) > div:nth-of-type(2)'))
				document.querySelector('#main-content > div:nth-of-type(2) > div:nth-of-type(2)').setAttribute('style','bottom:0px;');
			if (document.querySelector('header'))
				document.querySelector('header').remove();
			if (document.querySelector('#main-content > div:last-of-type > div:last-of-type'))
				document.querySelector('#main-content > div:last-of-type > div:last-of-type').setAttribute('style','top:0!important;bottom:0!important;');
		}
	}
	document.querySelector('body').setAttribute('style', 'overflow:hidden');
	update();
	window.setTimeout(update, 300);
	window.setTimeout(update, 1000);
	window.setTimeout(update, 3000);
})();