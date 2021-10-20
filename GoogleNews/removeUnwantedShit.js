// ==UserScript==
// @name         Google news - Remove clickbait by forbidden keyword in tittle, and remove unwanted section by name
// @namespace    http://tampermonkey.net/
// @version      0.0003
// @description  Remove google news articles where title match on forbidden list of words and sections of articles who matching with unwantedSections list of names
// @author       lp177
// @match        https://news.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=news.google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	const unwantedSections = ['Sports','Divertissement','Économie','Pour vous'];
	const forbiddensKeywords = [
		'disparition','disparue','enlèvement','sondage',
		'présidentielle 2022','election présidentielle','darmanin','douard philippe','procès des attentats du 13 Novembre',
		'décèdé','décède','décédé','popularité','conjoint','extorqué','meurtre','agression','tue','obsèque','inceste',
		'tpmp','samsung','xiaomi','cac 40','iphone',
		'viol','drame','hommage','manuel valls','blanquer','véran ','castex','gabriel attal','zemmour'
	];

	function filterArticles()
	{
		for (let title of document.querySelectorAll('article > h3 > a'))
		{
			if ( forbiddensKeywords.some( v => title.innerText.toLowerCase().includes(v.toLowerCase()) ) )
			{
				console.info('Removed: ', title.innerText, title.parentNode.parentNode.parentNode.parentNode);
				title.parentNode.parentNode.parentNode.parentNode.remove();
			}
		}
	}
	function removeSection()
	{
		for (const sectionName of unwantedSections)
		{
			let targetedSectionTitle = document.evaluate("//h2/span/a[text()='"+sectionName+"']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

			if (!targetedSectionTitle)
				continue ;//console.log('Section ', sectionName, 'Not found');

			let targetedSectionStart = document.evaluate("//h2/span/a[text()='"+sectionName+"']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentNode.parentNode.parentNode.parentNode;

			while (targetedSectionStart.nextSibling && !targetedSectionStart.nextSibling.querySelector('h2'))
				targetedSectionStart.nextSibling.remove();
		}
	}
	function removeSideSugestions()
	{
		document.querySelectorAll('aside article').forEach((item)=>item.remove());
	}
	filterArticles();
	removeSection();
	removeSideSugestions();
	setInterval( filterArticles, 1000 );
	setInterval( removeSection, 1000 );
	setInterval( removeSideSugestions, 1000 );
})();