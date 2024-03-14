// ==UserScript==
// @version      0.0001
// @name         Better coinmarketcap
// @description  Improve UI of coinmarketcap watchlist
// @grant        none
// @namespace    lp177
// @author       lp177
// @match        https://coinmarketcap.com/fr/watchlist/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coinmarketcap.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/CoinMarketCap/betterWatchlist.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/CoinMarketCap/betterWatchlist.js
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('head').insertAdjacentHTML(
		'beforeend',
		`<style type="text/css">
			.cmc-watchlist{
				max-width:none;
			}
			div:has(>#cmc-cookie-policy-banner)
			{
				display:none;
			}
		</style>`
	);
	window.scrollTo({ top: 310, left: 0, behavior: 'smooth' });
})();
