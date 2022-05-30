// ==UserScript==
// @version      1.000
// @name         Twitch - Somes fix on this ****ing video player
// @description  stop to autoplay anything and add play / pause on click in video block like any normal web video player... Click on timed bonus (icon of chest at left of chat input) automaticaly.
// @author       lp177
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// @namespace    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Twitch/video.js
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Twitch/video.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Twitch/video.js
// ==/UserScript==

(function() {
    'use strict';
	var debugIsFun=()=>null;
	var stats={savedUrl:null,urlChanged:false,uiSwitched:false,switcherPaused:false};
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
	function doNotStartMuted(retry=0)
	{
		if(retry>5)return;
		const muttedButton=document.querySelector('button[aria-label="Réactiver l\'audio (M)"]');
		if(muttedButton)
			muttedButton.click();
		setTimeout(()=>doNotStartMuted(retry+1),500);
	}
	function updateVideos()
	{
		if(stats.switcherPaused)return;
		if(window.location.href!==stats.savedUrl)
		{
			stats.savedUrl=window.location.href;
			stats.uiSwitched=false;
			document.querySelector('a>.tw-title')&&document.querySelector('a>.tw-title').addEventListener('click',()=>{
				stats.switcherPaused=true;
				setTimeout(()=>stats.switcherPaused=false,30000);
			});
		}
		if(document.querySelector('.community-points-summary .claimable-bonus__icon'))// Click on chest button for collect points
			document.querySelector('.community-points-summary .claimable-bonus__icon').click();
		if(document.querySelector('a[data-a-target="hosting-indicator"]'))// Open real url after hosting
			document.querySelector('a[data-a-target="hosting-indicator"]').click();
		if(!stats.uiSwitched)
		{// Open detail view of current video for have full and generic ui
			stats.uiSwitched=true;
			if(document.querySelector('.channel-status-info--live'))// We are on live streaming
			{
				if([4,5].includes(window.location.href.split('#')[0].split('?')[0].split('/').length))// Avoid to lock usage of others tabs
					document.querySelector('.channel-status-info--live').click();
			}
			else if(document.querySelector('div[data-a-player-type="channel_home_carousel"]'))// We are on replay video
				document.querySelector('div[class^="preview-card-thumbnail"]').click();
			else
				stats.uiSwitched=false;
		}
		const v = document.querySelector('video:not(.updatedBy177)');
		if (!v)
			return debugIsFun('No video to update found');
		v.classList.add('updatedBy177');
		v.addEventListener('click',v.pause);
		v.addEventListener('play',pauseAutoPlay);
		setTimeout(doNotStartMuted,500);
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