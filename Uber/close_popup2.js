// ==UserScript==
// @version      0.0002
// @name         Uber eat - Remove sugestions
// @description  Remove suggestions of unwanted products on chekout page
// @namespace    lp177
// @author       You
// @match        https://www.ubereats.com/*/store/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ubereats.com
// @grant        none
// ==/UserScript==
(function() {
	'use strict';
	var max_retry = 50, lastUrl = location.href,max_wait_url_change = 100;
	const is_good_url = /https:\/\/www\.ubereats\.com\/.+?\/checkout.+/gm,max_wait_url_change_default = 100;
	function close()
	{
		const closeSugestion = document.querySelector('div[role="dialog"] button[aria-label="Fermer"],div[role="dialog"] button[aria-label="Close"]');
		if (closeSugestion)
		{
			max_retry = 50;
			return closeSugestion.click();
		}
		if (max_retry-- < 0)
		{
			max_retry = 50;
			return;
		}
		setTimeout(close,100)
	}
	close();
	function rearmOnUrlChange()
	{
		if (lastUrl != location.href)
		{
			max_wait_url_change = max_wait_url_change_default;
			return is_good_url.exec(location.href) ? close() : null;
		}
		if (--max_wait_url_change < 1)
		{
			max_wait_url_change = max_wait_url_change_default;
			return;
		}
		setTimeout(rearmOnUrlChange, 300);
	}
	document.addEventListener('click', rearmOnUrlChange);
})();
