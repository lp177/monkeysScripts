// ==UserScript==
// @name         Ubereat - Close "how was your order?" popup automaticaly
// @description  Close annoying popup on ubereat who appear after each order "how was your order?"
// @version      0.002
// @namespace    lp177
// @author       lp177
// @match        https://www.ubereats.com/*
// @icon         https://www.google.com/s2/favicons?domain=ubereats.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Uber/close_popup.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Uber/close_popup.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
	function skipPopUp()
	{
		tryCount++;
		if (!document.querySelector('#wrapper footer + div button, div[data-test="desktop-dialog"] button'))
		{
			if (intervalId!=null&&tryCount>100)
				clearInterval(intervalId)
			return;
		}
		if (intervalId!=null)
			clearInterval(intervalId)
		document.querySelector('#wrapper footer + div button, div[data-test="desktop-dialog"] button').click();
	}
	var intervalId = null,tryCount=0;
	skipPopUp();
	setTimeout(skipPopUp, 100);
	setTimeout(skipPopUp, 300);
	intervalId = setInterval(skipPopUp, 500);
})();
