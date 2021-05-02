// ==UserScript==
// @name         Ubereat - Close "how was your order?" popup automaticaly
// @description  Close annoying popup on ubereat who appear after each order "how was your order?"
// @version      0.001
// @namespace    lp177
// @author       lp177
// @match        https://www.ubereats.com/feed*
// @icon         https://www.google.com/s2/favicons?domain=ubereats.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	function skipPopUp()
	{
		if (document.querySelector('#wrapper footer + div button'))
			document.querySelector('#wrapper footer + div button').click();
	}
	skipPopUp()
	setTimeout(skipPopUp, 100);
	setTimeout(skipPopUp, 300);
	setTimeout(skipPopUp, 600);
	setTimeout(skipPopUp, 1000);
	setTimeout(skipPopUp, 2000);
	setTimeout(skipPopUp, 3000);
	setTimeout(skipPopUp, 5000);
})();