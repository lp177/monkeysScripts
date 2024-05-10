// ==UserScript==
// @version      0.1202
// @name         LaPoste - Alert on event tracking
// @description  Display notification on each delivery status change for colissimo
// @author       lp177
// @namespace    lp177
// @grant        GM_notification
// @match        https://www.laposte.fr/outils/suivre-vos-envois*
// @icon         https://www.google.com/s2/favicons?domain=www.laposte.fr
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/LaPoste/colissimo_tracking_alert.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/LaPoste/colissimo_tracking_alert.js
// ==/UserScript==

(function() {
    'use strict';

    const timeUntilTwoCheck = 60;

    async function alertOnChange() {
		const wrapper=document.querySelector('wc-sun');
        if (!wrapper || !wrapper.getAttribute('data-shipments'))
            return; // Nothing to track avoid to refresh without track id

        const track_id = wrapper.getAttribute('data-shipments');
        const last_saved_value = localStorage.getItem('colisimo_alert_on_change.' + track_id);

		//First load - Init history for next comparaison
        if (last_saved_value === null)
            return localStorage.setItem(
				'colisimo_alert_on_change.' + track_id,
				document.querySelector('wc-sun').shadowRoot.querySelector('.MuiCollapse-wrapperInner p').innerText
			);
		//No change until last alert / first load
        if (last_saved_value === document.querySelector('wc-sun').shadowRoot.querySelector('.MuiCollapse-wrapperInner p').innerText)
            return;

        // New event detected !
        localStorage.setItem(
			'colisimo_alert_on_change.' + track_id,
			document.querySelector('wc-sun').shadowRoot.querySelector('.MuiCollapse-wrapperInner p').innerText
		);
		GM_notification({
		  title: "LaPoste Traking",
		  text: document.querySelector('wc-sun').shadowRoot.querySelector('.MuiCollapse-wrapperInner p').innerText,
		  url: location.href
		});
    }
    var pid = setInterval(alertOnChange, 10 * 1000);
	setTimeout(location.reload, timeUntilTwoCheck * 1000);
})();
