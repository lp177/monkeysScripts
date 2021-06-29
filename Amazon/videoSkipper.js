// ==UserScript==
// @version      0.0003
// @name         Amazon - video clip skipper
// @description  Skip fucking video clip previous each video on amazon video
// @match        https://www.primevideo.com/*
// @grant        none
// @namespace    lp177
// @author       lp177
// @icon         https://www.google.com/s2/favicons?domain=www.primevideo.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/videoSkipper.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/videoSkipper.js
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
	setInterval( skip, 500 );
})();