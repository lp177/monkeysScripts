// ==UserScript==
// @version      0.0006
// @name         Google news - Remove clickbait by forbidden keyword in tittle, and remove unwanted section by name
// @description  Remove google news articles where title match on forbidden list of words and sections of articles who matching with unwantedSections list of names
// @author       lp177
// @match        https://news.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=news.google.com
// @grant        none
// @namespace    https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleNews/hideUnwantedInformationsAbout.js
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleNews/hideUnwantedInformationsAbout.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleNews/hideUnwantedInformationsAbout.js
// ==/UserScript==

(function () {
    "use strict";
    var unwantedSections = [
        "Sports",
        "People",
        "Football",
        "Auto",
        "Cuisine",
	];
    const forbiddensKeywords = [
        "samsung",
        "xiaomi",
        "iphone",
        "disparition",
        "disparue",
        "enlèvement",
        "sondage",
        "viol",
        "drame",
        "hommage",
        "décèdé",
        "décède",
        "décédé",
		"meurent",
        "popularité",
        "conjoint",
        "extorqué",
        "meurtre",
        "agression",
        "tue",
        "obsèque",
        "inceste",
        "chauffard",
    ];
	function search_cwiz_element(element, max_level = 10)
	{
		while (max_level-- > 0)
		{
			if (element==null)
				return;
			if (element.parentNode?.tagName.toUpperCase() === "C-WIZ")
				return element.parentNode;
			element = element.parentNode;
		}
	}
    function filterArticles() {
        var title_txt;
        for (let title of document.querySelectorAll("article a")) {
            if (
                forbiddensKeywords.some((v) =>
                    title.innerText.toLowerCase().includes(v.toLowerCase()),
                )
            ) {
				let element = search_cwiz_element(title);
                console.info(
                    "Removed: ",
                    title.innerText,
                    element,
                );
                element?.remove();
            }
        }
    }
    function removeSection() {
        if (unwantedSections.length < 1) {
            clearInterval(removeSectionSetIntervalId);
            return console.info("No more section to clear, bye.");
        }
        for (const sectionName of unwantedSections) {
            let targetedSectionTitle = document.evaluate(
                ".//c-wiz//h2/a[text()='" +
                    sectionName +
                    "']|.//c-wiz//h3/a[text()='" +
                    sectionName +
                    "']",
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null,
            ).singleNodeValue;
            if (!targetedSectionTitle)
                continue;
            if (unwantedSections.indexOf(sectionName) != -1)
                unwantedSections.splice(
                    unwantedSections.indexOf(sectionName),
                    1,
                );
            let element = search_cwiz_element(targetedSectionTitle)
			console.info(
				"Removed: ",
				targetedSectionTitle.innerText,
				element,
			);
			element?.remove();
        }
    }
    function removeSideSugestions() {
        document
            .querySelectorAll("aside article")
            .forEach((item) => item.remove());
    }
    filterArticles();
    removeSection();
    removeSideSugestions();
    setInterval(filterArticles, 1000);
    setInterval(removeSideSugestions, 1000);
    var removeSectionSetIntervalId = setInterval(removeSection, 1000);
})();

