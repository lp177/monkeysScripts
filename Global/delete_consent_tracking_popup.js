// ==UserScript==
// @name         Delete consent tracking pop up
// @namespace    lp177
// @version      0.0002
// @description  Remove automaticaly all generic pop up who query consent for tracking you
// @author       lp177
// @match        http*://*/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Global/delete_consent_tracking_popup.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Global/delete_consent_tracking_popup.js
// ==/UserScript==

(function() {
    'use strict';

	function applyStyleAnPreserve(target, style)
	{
		setTimeout( ((target, style) => () => document.querySelector(target).setAttribute('style',style))(target, style), 10 );
		setTimeout( ((target, style) => () => document.querySelector(target).setAttribute('style',style))(target, style), 1000 );
	}

	function removePopUp(popUpSelector, removeClassFromBody = null, setBodyStyle = null, setHtmlStyle = null)
	{
		const popUp = document.querySelector(popUpSelector);

		if (!popUp)
			return false;

		popUp.remove();

		if (removeClassFromBody && document.body.classList.contains(removeClassFromBody))
			document.body.classList.remove(removeClassFromBody);
		if (setBodyStyle)
			applyStyleAnPreserve('body', setBodyStyle);
		if (setHtmlStyle)
			applyStyleAnPreserve('html', setHtmlStyle);

		return true;
	}
	function outputDebug(msg, verbose = true, prefix = 'popup remover match: ')
	{
		if (verbose === false) return;
		console.info(prefix,msg);
	}
	function launchAllDetection()
	{
		const verbose = true;
		if (removePopUp('#onetrust-consent-sdk')) return outputDebug( '#onetrust-consent-sd', verbose);
		else if (removePopUp('.cookie-banner-layer')) return outputDebug( '.cookie-banner-layer', verbose);
		else if (removePopUp('#didomi-host', 'didomi-popup-open')) return outputDebug( '#didomi-host', verbose);
		else if (removePopUp('#iubenda-cs-banner',null,null,'overflow: auto;')) return outputDebug( '#iubenda-cs-banner', verbose);
		else if (removePopUp('div[id^="sp_message_container_"]')) return outputDebug( 'div[id^="sp_message_container_"]', verbose);
		else if (removePopUp('body[style="overflow: hidden;"] div[role="presentation"],body[style="overflow: auto;clear177:true;"] div[role="presentation"]', null, 'overflow: auto;clear177:true;')) return outputDebug( 'body[style="overflow: hidden;"] div[role="presentation"]', verbose);
		else if (removePopUp('.truste_overlay[id^="pop-div"]') && removePopUp('.truste_box_overlay[id^="pop-div"]')) return outputDebug( '.truste_overlay[id^="pop-div"]', verbose);
	}
	setTimeout( launchAllDetection, 300 );
	setTimeout( launchAllDetection, 1000 );
	setTimeout( launchAllDetection, 2000 );
;
})();)();
