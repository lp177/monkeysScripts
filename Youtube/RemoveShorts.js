// ==UserScript==
// @version      0.0002
// @name         Youtube - Boycott Youtube Shorts for keep usefull features of the original video player
// @description  Remove useless videos in subscriptions section who use the shameful format named "shorts" by youtube who remove lot of usefull feature like: scrowling in timeline, subtitles, speed, use more of 20% of my desktop screen for the video...
// @author       lp177
// @namespace    lp177
// @match        https://www.youtube.com/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveShorts.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveShorts.js
// ==/UserScript==

(function() {
    'use strict';

	function searchShorts()
	{
		const shortIcons=document.querySelectorAll('[overlay-style="SHORTS"]');
		console.info('shortIcons=', shortIcons);
		for (var shortIcon of shortIcons)
		{
			console.info('Start from ', shortIcon);
			while(true)
			{
				if(shortIcon.tagName.toLowerCase()=='ytd-grid-video-renderer')
				{
					shortIcon.remove();
					console.info(shortIcon,'removed');
				}
				else if(shortIcon.parentNode)
				{
					shortIcon=shortIcon.parentNode;
					console.info('search parent of ', shortIcon);
					continue;
				}
				console.info('Take a break');
				break;
			}
		}
		setTimeout(searchShorts, 3000);
	}
	setTimeout(searchShorts, 1000);
})();