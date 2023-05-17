// ==UserScript==
// @version      0.0002
// @name         BeastSaber - Add my bookmarks button
// @description  Add a menu button for access to my bookmarks in social menu
// @namespace    lp177
// @author       lp177
// @match        https://bsaber.com/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bsaber.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/BeastSaber/addMyBookmarksButton.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/BeastSaber/addMyBookmarksButton.js
// ==/UserScript==

(function() {
    'use strict';
	function retryLater(retried, error)
	{
		console.error(error);
		if(retried<10)
			setTimeout(()=>createButton(retried+1),300*retried)
	}
	function createButton(retried = 0)
	{
		const profileButton = document.querySelector('nav.menu-holder .sub-menu a[href^="https://bsaber.com/members/"]'),
				bookmarksButton = document.querySelector('nav.menu-holder .sub-menu a[href^="https://bsaber.com/songs/new/?bookmarked_by="]');

		if(!profileButton)
			return retryLater(retried,'Fail to find profil button at: document.querySelector(\'nav.menu-holder .sub-menu a[href^="https://bsaber.com/members/"]\')');
		if(!bookmarksButton)
			return retryLater(retried,'Fail to find bookmarks button at: document.querySelector(\'nav.menu-holder .sub-menu a[href^="https://bsaber.com/songs/new/?bookmarked_by="]\')');

		const profilUrlParts = profileButton.href.split('/');
		const pseudo = '=' + profilUrlParts[profilUrlParts.length-2];
		const myBookmarksButton = bookmarksButton.parentNode.cloneNode(true);

		myBookmarksButton.querySelector('a').href = bookmarksButton.href.replace('=members', pseudo).replace('=%user%', pseudo);
		myBookmarksButton.querySelector('a').innerText = 'My bookmarks';
		bookmarksButton.parentNode.parentNode.insertBefore(myBookmarksButton, bookmarksButton.parentNode);
	}
	createButton();
})();
