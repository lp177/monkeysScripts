// ==UserScript==
// @version      0.0006
// @name         Twitch - Somes fix on this ****ing video player
// @description  stop to autoplay anything and add play / pause on click in video block like any normal web video player... Click on timed bonus (icon of chest at left of chat input) automaticaly.
// @namespace    lp177
// @author       lp177
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Twitch/video.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Twitch/video.js
// ==/UserScript==

(function() {
    'use strict';
	var debugIsFun=()=>null;
	var stats={savedUrl:null,urlChanged:false,uiSwitched:false};
	// debugIsFun=console.info;
	function pauseOrDie(e,remaining_try=5)
	{
		if (remaining_try<1)
			return debugIsFun('Paused ',e.target);
		e.target.pause();
		debugIsFun('Pausing ',e.target);
		setTimeout(()=>pauseOrDie(e,remaining_try-1),100);
	}
	function pauseAutoPlay(e)
	{
			debugIsFun('video presumed auto played: ', e.target);
			setTimeout(()=>pauseOrDie(e),10);
			e.target.removeEventListener('play',pauseAutoPlay);
	}
	function updateVideos()
	{
		if(window.location.href!==stats.savedUrl)
		{
			stats.savedUrl=window.location.href;
			stats.uiSwitched=false;
		}
		if(document.querySelector('.community-points-summary .claimable-bonus__icon'))// Click on chest button for collect points
			document.querySelector('.community-points-summary .claimable-bonus__icon').click();
		if(!stats.uiSwitched&&document.querySelector('.channel-status-info--live'))// Open detail view of current video for have full and generic ui
		{
			stats.uiSwitched=true;
			if(window.location.href.split('#')[0].split('?')[0].split('/').length===4)// Avoid to lock usage of others tabs
			{
				console.info('Click on .channel-status-info--live');
				document.querySelector('.channel-status-info--live').click();
			}
		}
		else if(!stats.uiSwitched&&document.querySelector('div[data-a-player-type="channel_home_carousel"]'))// Open detail view of current video for have full and generic ui
		{
			stats.uiSwitched=true;
			console.info('Click on div[class^="preview-card-thumbnail"]');
			document.querySelector('div[class^="preview-card-thumbnail"]').click();
		}
		const v = document.querySelector('video:not(.updatedBy177)');
		if (!v)
			return debugIsFun('No video to update found');
		v.classList.add('updatedBy177');
		v.addEventListener('click',v.pause);
		v.addEventListener('play',pauseAutoPlay);
		debugIsFun('UpdatedBy177/', v);
		const overlay=document.querySelector('.video-player__overlay');
		if(overlay)
			overlay.addEventListener('click',(e)=>{
				if(!e.target.hasAttribute('data-a-target')||e.target.getAttribute('data-a-target')!=='player-overlay-click-handler')
					return debugIsFun('Avoid to pause on UI button clicked:', e.target);
				debugIsFun('overlay clicked:', e.target);
				v.pause();
			});
	}
	setTimeout(()=>setInterval(updateVideos, 1000), 300);
})();