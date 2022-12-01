// ==UserScript==
// @version      0.0002
// @name         Remove facebook sponsored post
// @description  Remove each sponsored posts on Facebook / Meta
// @namespace    lp177
// @author       lp177
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Facebook/remove_sponsored_post.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Facebook/remove_sponsored_post.js
// ==/UserScript==
(function() {
    'use strict';
	function removeAllSponsoredPost()
	{
		for(let el of document.querySelectorAll('a[href^="/ads/"]'))
			el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
	}
	function throttle(callback, delay, context)
	{
		var last,timer = null;
		return function()
		{
			const ctx = context || this,
			now = +new Date(),
			args = arguments;
			if (last && now < last + delay)
			{
				clearTimeout(timer);
				timer = setTimeout(function()
				{
					last = now;
					callback.apply(ctx, args);
				},
				delay);
			}
			else
			{
				last = now;
				callback.apply(ctx, args);
			}
		};
	}
	removeAllSponsoredPost();
	setTimeout(removeAllSponsoredPost,1000);
	window.addEventListener('scroll', throttle(removeAllSponsoredPost, 600, window));
})();
