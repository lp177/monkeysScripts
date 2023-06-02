// ==UserScript==
// @version      0.0001
// @name         startpage.com - Remove ads info block
// @description  Remove big block of text recomendation about ads and adblockers from top of the search pages
// @namespace    lp177
// @author       lp177
// @match        https://www.startpage.com/sp/search*
// @icon         https://www.google.com/s2/favicons?domain=startpage.com
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	if(document.querySelector('.show-results #main svg path[d="M11 1 1 11M1 1l10 10"]'))
		document.querySelector('.show-results #main svg path[d="M11 1 1 11M1 1l10 10"]').parentNode.parentNode.click();
})();
