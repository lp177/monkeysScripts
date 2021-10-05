// ==UserScript==
// @version      0.0001
// @name         Twitch - Somes fix on this ****ing video player
// @description  stop to autoplay anything and add play / pause on click in video block like any normal web video player...
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
	debugIsFun=console.info;
	function pauseAutoPlay(e)
	{
			debugIsFun('video presumed auto played: ', e.target);
			e.target.removeEventListener('play',pauseAutoPlay);
			setTimeout(()=>e.target.pause(),100);
	}
	function updateVideos()
	{
		const v = document.querySelector('video:not(.updatedBy177)');
		if (!v)
			return debugIsFun('No video to update found');
		v.classList.add('updatedBy177');
		v.addEventListener('click',(e)=>{
			debugIsFun('video clicked, target:', e.target);
			v.pause();
		});
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