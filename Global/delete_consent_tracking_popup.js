// ==UserScript==
// @version      0.0136
// @name         Consent tracking remover
// @description  Delete automaticaly all generic pop up who query consent for tracking you like RGPD / cookies settings.
// @namespace    lp177
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
		setTimeout(((target, style)=>()=> document.querySelector(target).setAttribute('style', style))(target, style), 10);
		setTimeout(((target, style)=>()=> document.querySelector(target).setAttribute('style', style))(target, style), 1000);
	}
	function removeCssClass(classNames)
	{
		if (!classNames) return;
		if(!Array.isArray(classNames))
			classNames = [classNames];
		if (classNames.length < 1)return;
		var changes = 0;
		const htmlTag = document.querySelector('html'),
			bodyTag = document.querySelector('body');
		for (let className of classNames)
		{
			if(htmlTag.classList.contains(className))
			{
				htmlTag.classList.remove(className);
				changes++;
			}
			if(bodyTag.classList.contains(className))
			{
				bodyTag.classList.remove(className);
				changes++;
			}
		}
		return changes;
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
		console.info(prefix, msg);
	}
	function rearmRemovePopUp(popUpSelector, removeClassFromBody = null, setBodyStyle = null, setHtmlStyle = null, callback = null, max_rearm = 100)
	{
		if(!removePopUp(popUpSelector, removeClassFromBody, setBodyStyle, setHtmlStyle, callback) && --max_rearm > 0)
			setTimeout(() => rearmRemovePopUp(popUpSelector, removeClassFromBody, setBodyStyle, setHtmlStyle, callback, max_rearm), 100);
	}
	function rearmRemoveCssClassUntilSuccess(classNames,max_rearm = 100)
	{
		if(!removeCssClass(classNames) && --max_rearm > 0)
			setTimeout(() => rearmRemoveCssClassUntilSuccess(classNames, max_rearm), 100);
	}
	function clickClose(selector)
	{
		if (!document.querySelector(selector))
			return false;
		document.querySelector(selector).click();
		return true;
	}
	function sheduleOverflowRepare(run_count = 0)
	{
		console.log("sheduleOverflowRepare");
		const body = document.querySelector('body[style]');
		if(body&&body.getAttribute('style').indexOf('overflow: hidden')>-1)
			return body.setAttribute('style', body.getAttribute('style').replace('overflow: hidden', ''));
		if(document.querySelector('body.overflowHidden'))
			return document.querySelector('body.overflowHidden').classList.remove('overflowHidden');
		if (run_count < 30)
			setTimeout(()=>sheduleOverflowRepare(run_count+1), 100);
	}
	function launchAllDetection()
	{
		const verbose = true;
		if (removePopUp(
				'#onetrust-consent-sdk,#cookiebanner,#privacy-consent,#CybotCookiebotDialog,#dpr-manager,#axeptio_overlay,#gdpr-consent,#js-message-register,#tae-cookie-notice,#consent-manager-container,#usercentrics-root'
				+',#consent_blackbar,#ez-cookie-dialog-wrapper,#popup-accept-cookies,#cmp-app-container,#CybotCookiebotDialogBodyUnderlay,#cookie-banner,#cmplz-cookiebanner-container,#cookie-law-info-bar'
				+',#__consent.md-consent,.js-consent-banner,.cookie-banner,.cookie-banner-layer,.cookie-policy,.incentive-banner,.gdpr-settings,.fig-consent-banner,.global-site-notice.notice-cookie,.cookie-card_container'
				+',.cookieBanner,.consent-banner'
				+',div[class*="DivCookieBannerContainer"]'
		))
			return outputDebug('Generic simple modal list', verbose);
		else if (clickClose(
			'#popin_tc_privacy_button_2,#footer_tc_privacy_button_3,.cookie-banner-content #wt-cli-reject-btn,#vidal_consent a[name="button-refuse"],#gdpr-reject-btn,#cmpbox #cmpbntnotxt,'
			+'.moove-gdpr-infobar-reject-btn,button[action-type="DENY"][data-tracking-control-name="ga-cookie.consent.deny.v4"],.cookiebanner__buttons__deny'
		))
			return outputDebug('Generic clickClose', verbose);

		else if (document.querySelector('#qc-cmp2-ui button + button[mode="secondary"]'))
		{
			document.querySelector('#qc-cmp2-ui button + button[mode="secondary"]').click();
			return removePopUp('didomi-popup-open');
		}

		else if (removePopUp('.qc-cmp2-container'))
			return outputDebug('cmp2', verbose);

		else if (removePopUp('#didomi-host', 'didomi-popup-open'))
		{
			rearmRemoveCssClassUntilSuccess('didomi-popup-open');
			removePopUp('#acceptationCMPWall', null, 'overflow: auto;');
			return outputDebug('Didomi', verbose);
		}

		else if(removePopUp('.gdpr-lmd-wall', 'popin-gdpr-no-scroll'))
			return outputDebug('.gdpr-lmd-wall', verbose);

		else if(removePopUp('.cookie-notice'))
		{
			removePopUp('.cookie-mask');
			return outputDebug('.cookie-notice', verbose);
		}

		else if (removePopUp('div[data-portal-id="modal-portal-1"]', 'scrollDisabled'))
			return outputDebug('data-portal-id["modal-portal-1"]', verbose);

		else if (removePopUp('#appconsent', 'appconsent_noscroll'))
			return outputDebug('#appconsent', verbose);

		else if (removePopUp('#sd-cmp', ['noscroll','sd-cmp-gF8Ho'], null, null, () => window.scrollTo({ top: 0, behavior: 'smooth' })))
			return outputDebug('#sd-cmp', verbose);

		else if (removePopUp('#public_post_contextual-sign-in,#public_profile_contextual-sign-in', 'no-scroll'))
			return outputDebug('#public_post_contextual-sign-in,#public_profile_contextual-sign-in', verbose);

		else if (removePopUp('body[style="overflow: hidden;"] div[role="presentation"],body[style="overflow: auto;clear177:true;"] div[role="presentation"]', null, 'overflow: auto;clear177:true;'))
			return outputDebug('Generic modal who blocks scrolling', verbose);

		else if (removePopUp('#iubenda-cs-banner', null, null, 'overflow: auto;'))
			return outputDebug('#iubenda-cs-banner', verbose);

		else if (removePopUp('div[id^="sp_message_container_"]', 'sp-message-open'))
			return outputDebug('div[id^="sp_message_container_"]', verbose);

		else if (removePopUp('.truste_overlay[id^="pop-div"]') && removePopUp('.truste_box_overlay[id^="pop-div"]'))
			return outputDebug('.truste_overlay[id^="pop-div"]', verbose);

		else if (removePopUp('#cookieBarRGPDPop') && removePopUp('#cookieBarRGPDOverlay'))
			return outputDebug('#cookieBarRGPDPop', verbose);

		else if (removePopUp('.plo-cookie-overlay', 'plu-no-scroll'))
			return outputDebug('#axeptio_overlay', verbose);

		else if (removePopUp('.gdpr-hfp-wall', 'popin-gdpr-no-scroll'))
			return outputDebug('#gdpr-hfp-wall', verbose);

		else if (removePopUp('#HardsellOverlay', null, 'overflow: auto;'))
			return outputDebug('#HardsellOverlay', verbose);

		else if (removePopUp('div[data-t="cookiesMessage"]', 'overflow--hidden'))
		{
			const target = document.querySelector('.popover-portal');
			if(target)
				target.remove();
			return outputDebug('div[data-t="cookiesMessage"]', verbose);
		}

		else if (removePopUp('.privacy-consent--modal'))
		{
			const target = document.querySelector('.privacy-consent--backdrop');
			if(target)
				target.remove();
			return outputDebug('.privacy-consent--modal', verbose);
		}

		else if (removePopUp('#cl-consent'))
		{
			function remover()
			{
				const target = document.querySelector('#cl-consent');
				if(!target)
					return;
				target.remove();
				setTimeout(remover, 10);
				setTimeout(remover, 50);
				setTimeout(remover, 100);
			}
			setTimeout(remover, 100);
			return outputDebug('#cl-consent', verbose);
		}

		else if (removePopUp('div[data-testid^="cookie-policy"]', null, null, null,() => setTimeout(() => document.querySelector('body>div').setAttribute('style', 'position:relative!important;'), 1)))
			return outputDebug( 'div[data-testid="cookie-policy-manage-dialog"]', verbose);

		else if (removePopUp('#cplus_content_modal'))
		{
			removePopUp('#cplus_content_overlay');
			return outputDebug('#cplus_content_modal', verbose);
		}

		else if (removePopUp('#fast-cmp-root'))
		{
			document.querySelector('html').removeAttribute('data-fast-cmp-locked');
			return outputDebug('#cplus_content_modal', verbose);
		}

		else if (removePopUp('#gdpr-privacy-settings','wt-body-no-scroll'))
		{
			let overlay = document.querySelector('#gdpr-single-choice-overlay');
			if(overlay)
				overlay.remove();
			return outputDebug('#gdpr-privacy-settings', verbose);
		}

		else
			document.querySelector('html').className.includes('sd-cmp') && document.querySelector('html').setAttribute('style', 'overflow:auto!important;');

		// Floating not wanted video popup
		removePopUp('iframe.viously-iframe');
	}
	setTimeout(sheduleOverflowRepare, 100);
	setTimeout(launchAllDetection, 300);
	setTimeout(launchAllDetection, 1000);
	setTimeout(launchAllDetection, 2000);
	setTimeout(launchAllDetection, 5000);
})();
