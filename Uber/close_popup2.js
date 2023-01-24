// ==UserScript==
// @version      0.0001
// @name         Uber eat - Remove sugestions
// @description  Remove suggestions of unwanted products on chekout page
// @namespace    lp177
// @author       lp177
// @match        https://www.ubereats.com/*/checkout*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ubereats.com
// @grant        none
// ==/UserScript==
(function() {
	'use strict';
	var max_retry = 50;
	function close()
	{
		const closeSugestion = document.querySelector('div[role="dialog"] button[aria-label="Fermer"],div[role="dialog"] button[aria-label="Close"]');
		if (closeSugestion)
			return closeSugestion.click();
		if(max_retry-- < 0)
			return;
		setTimeout(close,100)
	}
	close();
})();
