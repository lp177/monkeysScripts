// ==UserScript==
// @version         1.3216
// @name            Youtube - Hide right column
// @description     Hide right column of recommendations and those at the end of the video
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @run-at          document-start
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumn.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumn.js
// ==/UserScript==
(function() {
    'use strict';
	function apply_css(selector, css)
	{
		if (typeof(selector) != 'string')
		{
			for (let select of selector)
				apply_css(select, css);
			return;
		}
		const element = document.querySelector(selector);
		if (!element||element.getAttribute("style")==css)
			return;
		element.setAttribute("style", css);
	}
	function hide()
	{
		apply_css('#related', 'display: none !important');
		apply_css('#columns #secondary', 'display: none !important');
		apply_css(['.ytp-chapter-hover-container','.ytp-chrome-bottom'], 'width:100%');
		apply_css('video.video-stream', 'width: 100%;height: auto;left: 0px;top: 0px;');
	}

	// content reloaded in ajax ?
	setInterval(hide, 20000);
	var time = 0;
	while (time < 15000)
	{
		time += 100;
		setTimeout(hide, time);
	}

})();
