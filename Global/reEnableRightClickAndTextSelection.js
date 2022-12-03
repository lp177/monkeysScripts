// ==UserScript==
// @version      0.0001
// @name         Keep right click and text selection on website of stupide senior member of the Conservative political party
// @description  Re-enable right click and text selection
// @namespace    lp177
// @author       lp177
// @match        https://nicrunicuit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nicrunicuit.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
	function reEnableShare()
	{
		/* Text Selection */
		const b=document.body;
		if(typeof b.onselectstart!='undefined')
			b.onselectstart=()=>true;
		else if(typeof b.style.MozUserSelect!='undefined')
			b.style.MozUserSelect='text';
		else b.onmousedown=()=>true;
		b.style.cursor='default';
		/* Right click */
		document.oncontextmenu=()=>true;
		document.ondragstart=()=>true;
	}
	reEnableShare();
	window.addEventListener('DOMContentLoaded', reEnableShare);
	setTimeout(reEnableShare, 1000);
	setTimeout(reEnableShare, 2000);
	setTimeout(reEnableShare, 3000);
	setTimeout(reEnableShare, 6000);
	setTimeout(reEnableShare, 12000);
})();
