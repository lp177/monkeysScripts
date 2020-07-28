// ==UserScript==
// @name         Firefox dark - Fix phpmyadmin background
// @namespace    http://tampermonkey.net/
// @version      0.2001
// @description  try to take over the world!
// @author       You
// @include      /^https?://aks(web|dev)eu1.allkeyshop.com/scripts/phpmyadmin/.+$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	function styling()
	{
		if ( document.querySelector( '#style177' ) )
			return ;
		document.querySelector( 'head' ).insertAdjacentHTML(
			'beforeend',
			`<style id="style177">
				#pma_navigation, body, .group, th, td, .sqlOuter, .tools, label
				{
					text-shadow: none !important;
					color: white !important;
					background: #191b1c !important;
				}
				.CodeMirror, .submenu ul
				{
					background: #191b1c !important;
				}
				th, #topmenucontainer
				{
					text-shadow: none !important;
					background: -moz-linear-gradient(top, #424242, #191b1c) !important;
					background: linear-gradient(top, #424242, #191b1c) !important;
				}
				a
				{
					text-shadow: none !important;
					color: #3698ff !important;
				}
			</style>`
		);
	}

	styling();
})();