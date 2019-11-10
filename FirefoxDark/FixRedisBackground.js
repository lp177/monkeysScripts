// ==UserScript==
// @name         	Firefox dark - Fix redis background
// @namespace    	lp177
// @author       	lp177
// @version      	0.1001
// @description  	Fix none dark background by dark reader extension on some phpmyadmin
// @match        	https://*.allkeyshop.com/scripts/phpredisadmin/*
// @grant        	none
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/FirefoxDark/FixRedisBackground.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/FirefoxDark/FixRedisBackground.js
// ==/UserScript==

(function() {
    'use strict';
	function styling()
	{
		if ( iframe.contentDocument.querySelector( '#style177' ) )
			return ;

		iframe.contentDocument.querySelector( 'head' ).insertAdjacentHTML(
			'beforeend',
			`<style id="style177">
				body
				{
					color: #424242;
					background: #191b1c;
				}
				table td
				{
					background-color: #191b1c !important;
				}
				li a
				{
					color: #3698ff;
				}
			</style>`
		);

		document.querySelector( 'head' ).insertAdjacentHTML(
			'beforeend',
			`<style id="style178">
				body
				{
					color: white !important;
				}
				a
				{
					color: #3698ff !important;
				}
			</style>`
		);
	}

	if ( iframe )
	{
		iframe.onload = styling;
		//setInterval( styling, 2500 );
	}
})();