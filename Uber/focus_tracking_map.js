// ==UserScript==
// @version      0.0002
// @name         Ubereat - Focus traking map, remove useless UI
// @namespace    lp177
// @author       lp177
// @description  Remove header/footer for use as fullscreen tracking map on traking order page
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
			if(document.querySelector('#main-content > div'))
				document.querySelector('#main-content > div').setAttribute('style','max-width:250px;');
		}
	}
    document.querySelector('head').insertAdjacentHTML(
		'beforeend',
		`<style type="text/css" id="injected177">
		.cw{box-shadow: 0 0 50px 10px red !important;}
		.f1,.f2,.f3,.f4{box-shadow: 0 0 20px 1px blue !important;background-color:rgba(0,0,250,0.1) !important;border-radius:25%;}
		.fg{box-shadow: 0 0 50px 10px green !important;}
		</style>`
	)
	document.querySelector('body').setAttribute('style', 'overflow:hidden');
	update();
	window.setTimeout(update, 300);
	window.setTimeout(update, 1000);
	window.setTimeout(update, 3000);
})();