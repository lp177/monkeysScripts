// ==UserScript==
// @name         	Youtube - Don't use until given date
// @namespace    	lp177
// @author       	lp177
// @version      	1.0178
// @description  	Block the youtubes pages with a message and a coutdown until the defined date
// @run-at       	document-start
// @match        	https://www.youtube.com/*
// @grant        	none
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/doNotUseThisShitUntil.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/doNotUseThisShitUntil.js
// ==/UserScript==

(function()
{
    'use strict';

	function display()
	{
		const targetedDate = new Date( '11/10/2019 06:47:34' ),// month/day/year
					   now = new Date();

		if ( now > targetedDate )
			return alert( 'The delay is outdated, you can now use this shit' );

		let remainingStr = '',
			remainingSecondes = (targetedDate.getTime() - now.getTime()) / 1000,
			secondesInAMonth = 60 * 60 * 24 * 30,
			secondesInADay = 60 * 60 * 24,
			secondesInAHour = 60 * 60;

		if ( remainingSecondes > secondesInAMonth )
		{
			remainingStr += Math.floor( remainingSecondes / secondesInAMonth ) + ' month ';
			remainingSecondes = remainingSecondes % secondesInAMonth;
		}
		if ( remainingSecondes > secondesInADay )
		{
			remainingStr += Math.floor( remainingSecondes / secondesInADay ) + ' day ';
			remainingSecondes = remainingSecondes % secondesInADay;
		}
		if ( remainingSecondes > secondesInAHour )
		{
			remainingStr += Math.floor( remainingSecondes / secondesInAHour ) + 'h ';
			remainingSecondes = remainingSecondes % secondesInAHour;
		}
		if ( remainingSecondes > 60 )
		{
			remainingStr += Math.floor( remainingSecondes / 60 ) + 'mn ';
			remainingSecondes = remainingSecondes % 60;
		}
		if ( remainingSecondes > 0 )
			remainingStr += Math.floor( remainingSecondes ) + 's';

		document.querySelector('html').style = "height: 100%;"
		document.querySelector('html').innerHTML = `<body style="
															margin: 0;
															padding: 0;
															height: 100%;
															background: black;
															color: white;
															width: 100%;
															font-size: 10vh;
															text-align: center;
															display: flex;
															flex-direction: column;
															justify-content: center;
														">
														Do not forget: I do not want to use this shit until in ${remainingStr}
													</body>`;

	}
	display();
	setInterval( display, 1000 );
})();