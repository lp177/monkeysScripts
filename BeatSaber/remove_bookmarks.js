// ==UserScript==
// @version      0.0001
// @name         BeastSaber - Clear bookmarks
// @description  Remove all your bookmarks when you visit your bookmarks page
// @namespace    lp177
// @author       lp177
// @match        https://bsaber.com/songs/new/?bookmarked_by=*
// @match        https://bsaber.com/songs/new/page/*/?bookmarked_by=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bsaber.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/BeatSaber/remove_bookmarks.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/BeatSaber/remove_bookmarks.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
	var found=0;
	function searchAndDestroy(max_retry=20)
	{
		const buttons = document.querySelectorAll('.fas.fa-bookmark');
		if(buttons.length<1&&--max_retry>0)
		{
			console.info('Wait for destruction...');
			return setTimeout(()=>searchAndDestroy(max_retry),100);
		}
		found+=buttons.length;
		for (let bt of buttons)
		{
			console.info('Destruction!!!');
			bt.click();
		}
		setTimeout(()=>searchAndDestroy(max_retry-1),100);
	}
	setTimeout(searchAndDestroy,1500);
	setTimeout(()=>{
		if(found>0)location.reload();
	},3100);
})();
