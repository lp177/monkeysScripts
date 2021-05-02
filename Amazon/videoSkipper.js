
// ==UserScript==
// @name         Amazon - video clip skipper
// @namespace    lp177
// @version      0.0002
// @description  Skip fucking video clip previous each video on amazon video
// @author       lp177
// @match        https://www.primevideo.com/*
// @grant        none
// @icon         	https://www.google.com/s2/favicons?domain=www.primevideo.com
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/videoSkipper.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/videoSkipper.js
// ==/UserScript==

(function() {
    'use strict';

    function skip()
	{
		const skipBt = document.querySelector('.skippable');

		if ( skipBt )
			skipBt.click()
	}
	skip();
})();