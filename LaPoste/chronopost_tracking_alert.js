// ==UserScript==
// @version      0.1205
// @name         Chronopost - Alert on event trackin
// @description  Display notification on each delivery status changeg for chronopost
// @author       lp177
// @namespace    lp177
// @grant        GM_notification
// @match        https://www.chronopost.fr/tracking-no-cms/*
// @icon         https://www.google.com/s2/favicons?domain=www.chronopost.fr
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/LaPoste/chronopost_tracking_alert.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/LaPoste/chronopost_tracking_alert.js
// ==/UserScript==

(function() {
    'use strict';

    const timeUntilTwoCheck = 10;

    async function alertOnChange() {
        if (!document.querySelector('#numeroLT') || !document.querySelector('#numeroLT').value)
            return; // Nothing to track avoid to refresh without track id

        const track_id = document.querySelector('#numeroLT').value;
        const last_change_in_history = localStorage.getItem('chronopost_alert_on_change.' + track_id);

        if (last_change_in_history === null)
		{
            localStorage.setItem(
				'chronopost_alert_on_change.' + track_id,
				document.querySelector('#suiviTab tbody tr:nth-of-type(2) td').innerText
			);
            return setTimeout(location.reload.bind(window.location), timeUntilTwoCheck * 1000); //First load - Init history for next comparaison
        }
        if (last_change_in_history === document.querySelector('#suiviTab tbody tr:nth-of-type(2) td').innerText)
            return setTimeout(location.reload.bind(window.location), timeUntilTwoCheck * 1000); //No change until last alert / first load

        // New event detected !
        localStorage.setItem(
			'chronopost_alert_on_change.' + track_id,
			document.querySelector('#suiviTab tbody tr:nth-of-type(2) td').innerText
		);
		GM_notification({
		  title: "LaPoste Traking",
		  text: document.querySelector('#suiviTab tbody tr:nth-of-type(2) td:nth-of-type(2)').innerText,
		  url: location.href
		});
		setTimeout(location.reload.bind(window.location), timeUntilTwoCheck * 1000);
    }
    var pid = setInterval(alertOnChange, timeUntilTwoCheck * 1000);
})();
