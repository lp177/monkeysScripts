// ==UserScript==
// @name         Amazon - video clip skipper
// @namespace    lp177
// @version      0.0001
// @description  Skip fucking video clip previous each video on amazon video
// @author       lp177
// @match        https://www.primevideo.com/detail/*
// @grant        none
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
