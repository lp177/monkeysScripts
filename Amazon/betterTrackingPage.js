// ==UserScript==
// @version      2025-11-10
// @name         Improve tracking page of amazon
// @description  Remove ads/suggestion on order tracking page and reload the page all 60s
// @namespace    lp177
// @author       lp177
// @match        https://www.amazon.fr/progress-tracker/*
// @match        https://www.amazon.fr/gp/your-account/ship-track?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.fr
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/betterTrackingPage.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/betterTrackingPage.js
// ==/UserScript==
(function() {
    'use strict';

    function cleanUI()
	{
		const garbage=document.querySelectorAll('.a-row.recsWidgetContainer, .copilot-secure-display, #navFooter, #navbar');
		for (const el of garbage)
			el.remove();
		document
        .querySelector('head')
        .insertAdjacentHTML(
            'beforeend',
            '<style type="text/css">body{padding-top:50px!important;}</style>'
		);
	}
	setTimeout(location.reload.bind(window.location), 60000);
	cleanUI();
})();
