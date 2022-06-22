// ==UserScript==
// @version      0.0005
// @name         Google news - Remove clickbait by forbidden keyword in tittle, and remove unwanted section by name
// @description  Remove google news articles where title match on forbidden list of words and sections of articles who matching with unwantedSections list of names
// @namespace    lp177
// @author       lp177
// @match        https://news.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=news.google.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleNews/hideUnwantedInformationsAbout.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleNews/hideUnwantedInformationsAbout.js
// ==/UserScript==

(function() {
    'use strict';

	const unwantedSections = ['Sports','Divertissement','Économie','Pour vous'];
	const forbiddensKeywords = [
		'samsung','xiaomi','cac 40','iphone','stock PS5',
		'disparition','disparue','enlèvement','sondage','tpmp','viol','drame','hommage',
		'décèdé','décède','décédé','popularité','conjoint','extorqué','meurtre','agression','tue','obsèque','inceste','chauffard',
		'darmanin','douard philippe','procès des attentats du 13 Novembre',
		'manuel valls','trump','blanquer','véran ','castex','gabriel attal','zemmour'
	];

	function filterArticles()
	{
		var title_txt;
		for (let title of document.querySelectorAll('article a'))
		{
			title_txt=title.hasAttribute('aria-label')?title.getAttribute('aria-label'):title.innerText;
			if (forbiddensKeywords.some(v=>title_txt.toLowerCase().includes(v.toLowerCase())))
			{
				console.info('Removed: ', title_txt, title.parentNode.parentNode.parentNode.parentNode);
				title.parentNode.parentNode.parentNode.parentNode.remove();
			}
		}
	}
	function removeSection()
	{
		for (const sectionName of unwantedSections)
		{
			let targetedSectionTitle = document.evaluate(".//h2/span/a[text()='"+sectionName+"']|.//c-wiz//h3/a[text()='"+sectionName+"']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

			if (!targetedSectionTitle)
			{
				console.log('Section ', sectionName, 'Not found');
				continue;
			}
			let targetedSectionStart = document.evaluate(".//c-wiz//h3/a[text()='"+sectionName+"']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
			if(targetedSectionStart)
			{
				targetedSectionStart.singleNodeValue.parentNode.parentNode.parentNode.parentNode.remove();
				continue;
			}
			targetedSectionStart = document.evaluate(".//h2/span/a[text()='"+sectionName+"']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentNode.parentNode.parentNode.parentNode;
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
