// ==UserScript==
// @version      1.1001.001
// @name         DPD - Notify on status change
// @description  try to take over the world!
// @author       lp177
// @namespace    lp177
// @grant        GM_notification
// @match        https://www.dpdgroup.com/*/mydpd/my-parcels/incoming?parcelNumber=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dpdgroup.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/DPD/tracking_alert.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/DPD/tracking_alert.js
// ==/UserScript==
(function() {
    'use strict';
    const timeUntilTwoCheck = 30;
	const notification_name = 'DPD';
	const get_track_id = () => new URLSearchParams(document.location.search).get("parcelNumber")?.trim();
	const get_status = () => document.querySelector('.parcelAlias+span+span.gray-out')?.innerText.trim();
	function remove_outdated_history()
	{
		for (const key of Object.keys(localStorage))
		{
			if (!key.startsWith(notification_name + '_alert_on_change.'))
				continue;
			const timestamp_of_last_change = parseInt(localStorage.getItem(key).split(';', 1));
			const days_from_last_change = (Date.now() - timestamp_of_last_change) / 1000 / 60 / 60 / 24;
			if (days_from_last_change > 30)
				localStorage.removeItem(key);
		}
	}
    async function alertOnChange() {
        const track_id = get_track_id();
        if (!track_id)
		{
			setTimeout(alertOnChange, 1000);
            return console.info('Nothing to track'); // Nothing to track avoid to refresh without track id
		}
        let last_change_in_history = localStorage.getItem(notification_name + '_alert_on_change.' + track_id);
        const lastText = get_status();
        if (last_change_in_history === null) // First load - Init history for next comparaison
        {
            localStorage.setItem(
                notification_name + '_alert_on_change.' + track_id,
                String(Date.now()) + ';' + lastText
            );
            return;
        }
		last_change_in_history = last_change_in_history.substr(last_change_in_history.split(';', 1)[0].length+1); // Remove timestamp part
        if (last_change_in_history === lastText) //No change until last alert / first load
            return;
        // New status detected !
        localStorage.setItem(
            notification_name + '_alert_on_change.' + track_id,
            String(Date.now()) + ';' + lastText
        );
        GM_notification({
          title: notification_name + " Traking",
          text: lastText,
          url: location.href
        });
    }
    setTimeout(alertOnChange, 1000);
	setTimeout(()=>get_track_id()&&location.reload.bind(window.location), timeUntilTwoCheck * 1000);
	remove_outdated_history();
})();
