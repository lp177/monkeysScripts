// ==UserScript==
// @version      0.1206
// @name         TNT - Alert on event tracking
// @description  Display notification on each delivery status changed for TNT
// @author       lp177
// @namespace    lp177
// @grant        GM_notification
// @match        https://www.tnt.fr/public/suivi_colis/recherche/*
// @icon         https://www.google.com/s2/favicons?domain=www.tnt.fr
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/TNT/tnt_tracking_alert.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/TNT/tnt_tracking_alert.js
// ==/UserScript==
(function() {
    'use strict';
    const timeUntilTwoCheck = 30;
    async function alertOnChange(delay=100) {
		const track_id_element = document.querySelector('.parsys .layout__item');
        if (!track_id_element)
		{
			setTimeout(()=>alertOnChange(delay*2), 2*delay);
            return console.warn('Nothing to track avoid to refresh without track id');
		}
        const track_id = track_id_element.innerText.split(/\s/)[track_id_element.innerText.split(/\s/).length-1];
		console.info('Track id: ', track_id);
        const last_change_in_history = localStorage.getItem('tnt_alert_on_change.' + track_id);
        //const lastText=document.querySelector('#infosLivraisonColis label')?.innerText;
        const lastText=document.querySelector('.menu--accordion .result__content .roster__item')?.innerText;
        if (last_change_in_history === null)
        {
            localStorage.setItem(
                'tnt_alert_on_change.' + track_id,
                lastText
            );
            return setTimeout(location.reload.bind(window.location), timeUntilTwoCheck * 1000); //First load - Init history for next comparaison
        }
        if (last_change_in_history === lastText)
            return setTimeout(location.reload.bind(window.location), timeUntilTwoCheck * 1000); //No change until last alert / first load
        // New event detected !
        localStorage.setItem(
            'tnt_alert_on_change.' + track_id,
            lastText
        );
        GM_notification({
          title: "TNT Traking",
          text: lastText,
          url: location.href
        });
        setTimeout(location.reload.bind(window.location), timeUntilTwoCheck * 1000);
    }
	alertOnChange();
})();
