// ==UserScript==
// @version      1.0000.001
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
	const get_track_id = ()=>document.querySelector('.parcelAlias')?.innerText.trim();
	const get_status = ()=>document.querySelector('.parcelAlias+span+span.gray-out')?.innerText.trim();
    async function alertOnChange() {
        const track_id = get_track_id();
        if (!track_id)
		{
			setTimeout(alertOnChange, 1000);
            return console.info('Nothing to track'); // Nothing to track avoid to refresh without track id
		}
        const last_change_in_history = localStorage.getItem(notification_name + '_alert_on_change.' + track_id);
        const lastText = get_status();
        if (last_change_in_history === null) // First load - Init history for next comparaison
        {
            localStorage.setItem(
                notification_name + '_alert_on_change.' + track_id,
                lastText
            );
            return;
        }
        if (last_change_in_history === lastText) //No change until last alert / first load
            return;
        // New status detected !
        localStorage.setItem(
            notification_name + '_alert_on_change.' + track_id,
            lastText
        );
        GM_notification({
          title: notification_name + " Traking",
          text: lastText,
          url: location.href
        });
    }
    setTimeout(alertOnChange, 1000);
	setTimeout(()=>get_track_id()&&location.reload.bind(window.location), timeUntilTwoCheck * 1000);
})();
