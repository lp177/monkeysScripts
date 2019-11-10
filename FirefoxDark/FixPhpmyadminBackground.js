// ==UserScript==
// @name         	Firefox dark - Fix phpmyadmin background
// @namespace    	lp177
// @author       	lp177
// @version      	0.1001
// @description  	Fix none dark background by dark reader extension on some phpmyadmin
// @match        	http://*.allkeyshop.com/scripts/phpmyadmin/*
// @grant        	none
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/FirefoxDark/FixPhpmyadminBackground.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/FirefoxDark/FixPhpmyadminBackground.js
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
				#pma_navigation, body, .group, td, .sqlOuter, .tools
				{
					text-shadow: none !important;
					color: #424242 !important;
					background: #191b1c !important;
				}
				.CodeMirror
				{
					background: #191b1c !important;
				}
				html body #pma_navigation
				{
					color: white !important;
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
				}
				a
				{
					color: #3698ff !important;
				}
			</style>`
		);
	}

	styling();
})();