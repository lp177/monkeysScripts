// ==UserScript==
// @name         	Amazon - switch comment sorting
// @description  	Select by default most recents comments sorting until of best ratings
// @author          lp177
// @namespace       lp177
// @version      	1.0001
// @match        	https://www.amazon.fr/*
// @match        	https://www.amazon.com/*
// @grant        	none
// @icon         	https://www.google.com/s2/favicons?domain=www.amazon.com
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/switchSortCommentsToMostRecents.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/switchSortCommentsToMostRecents.js
// ==/UserScript==

(function() {
    'use strict';
    function switchToMostRecent()
	{
		if (document.querySelector('#cm-cr-dp-review-sort-type span span select'))
		{
			if (document.querySelector('#cm-cr-sort-dropdown[aria-pressed="false"],#cm-cr-sort-dropdown:not([aria-pressed])'))
				document.querySelector('#cm-cr-dp-review-sort-type span span select').click();
			if(document.querySelector(`a[data-value='{"stringVal":"recent"}']`))
				return document.querySelector(`a[data-value='{"stringVal":"recent"}']`).click();
		}
		setTimeout(switchToMostRecent, 1000);
	}
	setTimeout(switchToMostRecent, 300);
})();