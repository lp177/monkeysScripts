// ==UserScript==
// @name         Firefox dark - Fix redis background
// @namespace    http://tampermonkey.net/
// @version      0.2001
// @description  try to take over the world!
// @author       You
// @match        https://*.allkeyshop.com/scripts/phpredisadmin/?view&*
// @match        http://redis/?view&*
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

	var max_retry = 10;

	function styling()
	{
		if ( document.querySelector('#iframe') === null )
		{
			if ( --max_retry > 0 )
				setTimeout( styling, 300 );
			return;
		}
		if ( document.querySelector('#iframe').contentDocument.querySelector( '#style177' ) )
			return ;

		document.querySelector('#iframe').contentDocument.querySelector( 'head' ).insertAdjacentHTML(
			'beforeend',
			`<style id="style177">
				body
				{
					color: white;
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
					background-color: #000;
					color: white !important;
				}
				a
				{
					color: #3698ff !important;
				}
				#keys ul ul li.last
				{
					background: none !important;
				}
				#sidebar
				{
					background: black;
				}
			</style>`
		);
	}

	if ( document.querySelector('#iframe') )
	{
		document.querySelector('#iframe').onload = styling;
		//setInterval( styling, 2500 );
	}
	setTimeout( styling, 300 );

})();