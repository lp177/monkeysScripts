// ==UserScript==
// @version      	1.1002
// @name         	Youtube - Don't use until given date or day
// @description  	Block the youtubes pages with a message and a coutdown until the defined date or day of the week
// @match        	https://www.youtube.com/*
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @run-at       	document-start
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/doNotUseThisShitUntil.js
// @updateURL		https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/doNotUseThisShitUntil.js
// ==/UserScript==

(function()
{
    'use strict';

	function getNextDayOfTheWeek(dayOfWeek, excludeToday = false, fromDate = new Date())
	{
		fromDate.setHours(0,0,0,0);
		fromDate.setDate(fromDate.getDate() + (dayOfWeek + 7 - fromDate.getDay() - !!excludeToday) % 7);
		return fromDate;
	}

	function display()
	{
		const now = new Date(),
			// targetedDate = new Date( '12/01/2019 06:47:34' );// month/day/year for precise date and time
			targetedDate = getNextDayOfTheWeek(0);// for recuring day (block all days except thus in parameter) 0 = Sunday, 1 = monday

		if ( now > targetedDate )
		{
			if ( clearInterval != undefined )
			{
				clearInterval( intervalId );
				clearInterval = undefined;
			}
			return;
		}
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
	setTimeout(display, 150);
	display();
	var intervalId = setInterval( display, 1000 );
})();
