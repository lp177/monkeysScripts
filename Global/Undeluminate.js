// ==UserScript==
// @version      0.0005
// @name         Undeluminate
// @description  Disable deluminate
// @namespace    lp177
// @author       lp177
// @match        https://aksdeveu1.allkeyshop.com/daksbots/*
// @match        https://git.allkeyshop.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=allkeyshop.com
// @grant        none
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
	function disable(max_retry=60)
	{
		const h=document.querySelector('html[hc]');
		if(!h&&max_retry>0)return setTimeout(()=>disable(max_retry-1),100);
		h.removeAttribute('hc');
	}
	var observer = new MutationObserver(function(mutations)
	{
		mutations.forEach(mutation=>(mutation.type==='attributes')?disable():undefined);
	});
	observer.observe(document.querySelector('html'),{attributes:true});
	disable();
	setTimeout(()=>disable(max_retry=0),1);
	setTimeout(()=>disable(max_retry=0),5);
	setTimeout(()=>disable(max_retry=0),10);
	setTimeout(()=>disable(max_retry=100),100);
})();