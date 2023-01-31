// ==UserScript==
// @version      0.0001
// @name         Binance - precheck sell
// @description  Precheck all dust currency regulary sell
// @author       lp177
// @namespace    lp177
// @match        https://www.binance.com/*/my/wallet/account/main/dust
// @icon         https://www.google.com/s2/favicons?sz=64&domain=binance.com
// @grant        none
// ==/UserScript==
(function() {
	'use strict';
	const sell = [ 'ATOM', 'CTK', 'DOT', 'EGLD', 'OM', 'SOL' ];
	function checkAll(retried = 0)
	{
		var checked = 0;
		for(let currency of sell)
		{
			for(let el of document.querySelectorAll('tr[data-row-key="' + currency + '"] input[type="checkbox"]'))
			{
				if(el.checked != true)
					el.click();
				checked += 1;
			}
		}
		if (checked == 0 && retried < 100)
			setTimeout(()=>checkAll(retried + 1), 100);
	}
	setTimeout(checkAll, 500);
})();
