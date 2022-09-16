// ==UserScript==
// @version      0.0001
// @name         Picard - liens commentaire en liens normaux
// @description  Change links in shop history who going to commentary section in normal link who open the page at his normal start
// @namespace    lp177
// @author       lp177
// @match        https://www.picard.fr/on/demandware.store/Sites-picard-Site/fr_FR/Order-Track*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=picard.fr
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
	for (let link of document.querySelectorAll('a[href$="#addReview"]'))
	{
		link.setAttribute('href',link.getAttribute('href').replace('#addReview',''));
		link.innerText='Détailles';
	}
})();
