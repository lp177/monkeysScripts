// ==UserScript==
// @name         Delete consent tracking pop up
// @namespace    lp177
// @version      0.0127
// @description  Remove automaticaly all generic pop up who query consent for tracking you
// @author       lp177
// @match        http://*/*
// @match        https://*/*
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
	function removeCssClass(classNames)
	{
		if (!classNames)return;
		if(!Array.isArray(classNames))
			classNames=[classNames];
		if (classNames.length<1)return;
		for (let className of classNames)
		{
		let htmlTag=document.querySelector('html');
			if(htmlTag.classList.contains(className))
				htmlTag.classList.remove(className);
			if(document.body.classList.contains(className))
				document.body.classList.remove(className);
		}
	}
	function removePopUp(popUpSelector, removeClassFromBody = null, setBodyStyle = null, setHtmlStyle = null, callback = null)
	{
		const popUp = document.querySelector(popUpSelector);

		if (!popUp)
			return false;

		popUp.remove();

		if (removeClassFromBody)
			removeCssClass(removeClassFromBody);
		if (setBodyStyle)
			applyStyleAnPreserve('body', setBodyStyle);
		if (setHtmlStyle)
			applyStyleAnPreserve('html', setHtmlStyle);
		if (callback)
			callback();

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
		else if (removePopUp('#cookiebanner')) return outputDebug( '#cookiebanner', verbose);
		else if (removePopUp('.cookie-banner')) return outputDebug( '.cookie-banner', verbose);
		else if (removePopUp('#privacy-consent')) return outputDebug( '#privacy-consent', verbose);
		else if (removePopUp('.cookie-banner-layer')) return outputDebug( '.cookie-banner-layer', verbose);
		else if (removePopUp('#CybotCookiebotDialog')) return outputDebug( '#CybotCookiebotDialog', verbose);
		else if (removePopUp('#didomi-host', 'didomi-popup-open')) return outputDebug( '#didomi-host', verbose);
		else if (removePopUp('#sd-cmp', ['noscroll','sd-cmp-gF8Ho'],null,null,()=>window.scrollTo({ top: 0, behavior: 'smooth' }))) return outputDebug( '#sd-cmp', verbose);
		else if (removePopUp('#dpr-manager')) return outputDebug( '#dpr-manager', verbose);
		else if (removePopUp('#iubenda-cs-banner',null,null,'overflow: auto;')) return outputDebug( '#iubenda-cs-banner', verbose);
		else if (removePopUp('div[id^="sp_message_container_"]','sp-message-open')) return outputDebug( 'div[id^="sp_message_container_"]', verbose);
		else if (removePopUp('body[style="overflow: hidden;"] div[role="presentation"],body[style="overflow: auto;clear177:true;"] div[role="presentation"]', null, 'overflow: auto;clear177:true;')) return outputDebug( 'body[style="overflow: hidden;"] div[role="presentation"]', verbose);
		else if (removePopUp('.truste_overlay[id^="pop-div"]') && removePopUp('.truste_box_overlay[id^="pop-div"]')) return outputDebug( '.truste_overlay[id^="pop-div"]', verbose);
		else if (removePopUp('#axeptio_overlay')) return outputDebug( '#axeptio_overlay', verbose);
		else if (removePopUp('#gdpr-consent')) return outputDebug( '#gdpr-consent', verbose);
		else if (removePopUp('div[class*="DivCookieBannerContainer"]')) return outputDebug( 'div[class*="DivCookieBannerContainer"]', verbose);
		else if (removePopUp('.qc-cmp2-container')) return outputDebug( '.qc-cmp2-container', verbose);
		else if (removePopUp('.incentive-banner')) return outputDebug( '.incentive-banner', verbose);
		else if (removePopUp('.plo-cookie-overlay','plu-no-scroll')) return outputDebug( '#axeptio_overlay', verbose);
		// not RGPD but painful banner/modal who request of auth/subscribe
		else if (removePopUp('#js-message-register')) return outputDebug( '#js-message-register', verbose);
		else if (removePopUp('.fig-consent-banner')) return outputDebug( '.fig-consent-banner', verbose);
		else if (removePopUp('div[data-t="cookiesMessage"]')) return outputDebug( 'div[data-t="cookiesMessage"]', verbose);
		else if (removePopUp('div[data-testid^="cookie-policy"]', null, null, null,()=>setTimeout(()=>document.querySelector('body>div').setAttribute('style','position:relative!important;'),1))) return outputDebug( 'div[data-testid="cookie-policy-manage-dialog"]', verbose);
		else document.querySelector('html').className.includes('sd-cmp')&&document.querySelector('html').setAttribute('style','overflow:auto!important;');
		// Floating not wanted video popup
		removePopUp('iframe.viously-iframe');
	}
	setTimeout( launchAllDetection, 300 );
	setTimeout( launchAllDetection, 1000 );
	setTimeout( launchAllDetection, 2000 );
})();
