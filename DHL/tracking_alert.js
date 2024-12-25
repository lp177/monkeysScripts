// ==UserScript==
// @version      1.0001.023
// @name         DHL - Notify on tracking change
// @description  Display notification on each delivery status change for DHL
// @namespace    lp177
// @author       lp177
// @grant        GM_notification
// @match        https://www.dhl.com/fr-fr/home/tracking/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dhl.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/DHL/tracking_alert.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/DHL/tracking_alert.js
// ==/UserScript==
(function () {
    "use strict";
    const timeUntilTwoCheck = 60;
    async function alertOnChange() {
        const wrapper = document.querySelector(
            '.c-tracking-result--section span[aria-hidden="true"]',
        );
        if (!wrapper) return; // Nothing to track avoid to refresh without track id
        const track_id = wrapper.innerText;
        const last_saved_value = localStorage.getItem(
            "dhl_alert_on_change." + track_id,
        );
        const actual_state = document.querySelector(
            ".c-tracking-result--status-copy-message",
        ).innerText;
        //First load - Init history for next comparaison
        if (last_saved_value === null)
            return localStorage.setItem(
                "dhl_alert_on_change." + track_id,
                actual_state,
            );
        //No change until last alert / first load
        if (last_saved_value === actual_state) return;
        // New event detected !
        localStorage.setItem("dhl_alert_on_change." + track_id, actual_state);
        GM_notification({
            title: "DHL Traking",
            text: actual_state,
            url: location.href,
        });
    }
    var pid = setInterval(alertOnChange, 10 * 1000);
    setTimeout(location.reload.bind(window.location), timeUntilTwoCheck * 1000);
})();
