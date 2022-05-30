// ==UserScript==
// @version      0.0001
// @name         startpage.com - Set value keywords as title
// @description  Make usefull html title feature / tab names, on startpage.com website...
// @namespace    lp177
// @author       lp177
// @match        https://www.startpage.com/sp/search*
// @icon         https://www.google.com/s2/favicons?domain=startpage.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	const q = document.querySelector('#q'), title = document.querySelector('title');
	if (q && title)title.innerText = q.value;
})();