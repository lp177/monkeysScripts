// ==UserScript==
// @version      0.0130
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
		setTimeout( ((target, style) => () => document.querySelector(target).setAttribute('style', style))(target, style), 10 );
		setTimeout( ((target, style) => () => document.querySelector(target).setAttribute('style', style))(target, style), 1000 );
	}
	function removeCssClass(classNames)
	{
		if (!classNames) return;
		if(!Array.isArray(classNames))
			classNames = [classNames];
		if (classNames.length < 1)return;
		var changes = 0;
		for (let className of classNames)
		{
			let htmlTag = document.querySelector('html'),
				bodyTag = document.querySelector('body');
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
	function rearmRemoveCssClassUntilSuccess(classNames,max_rearm = 100)
	{
		if(!removeCssClass(classNames) && --max_rearm > 0)
			setTimeout(() => rearmRemoveCssClassUntilSuccess(classNames, max_rearm), 100);
	}
	function launchAllDetection()
	{
		const verbose = true;
		if (removePopUp(
				'#onetrust-consent-sdk,#cookiebanner,#privacy-consent,#CybotCookiebotDialog,#dpr-manager,#axeptio_overlay,#gdpr-consent,#js-message-register,'
				+'.js-consent-banner,.cookie-banner,.cookie-banner-layer,.cookie-policy,.qc-cmp2-container,.incentive-banner,.gdpr-settings,.fig-consent-banner,'
				+'div[class*="DivCookieBannerContainer"]'
		))
			return outputDebug('Generic simple modal list', verbose);

		else if (removePopUp('#didomi-host', 'didomi-popup-open'))
		{
			rearmRemoveCssClassUntilSuccess('didomi-popup-open');
			return outputDebug('Didomi', verbose);
		}

		else if (removePopUp('#sd-cmp', ['noscroll','sd-cmp-gF8Ho'], null, null, () => window.scrollTo({ top: 0, behavior: 'smooth' })))
			return outputDebug('#sd-cmp', verbose);

		else if (removePopUp('body[style="overflow: hidden;"] div[role="presentation"],body[style="overflow: auto;clear177:true;"] div[role="presentation"]', null, 'overflow: auto;clear177:true;'))
			return outputDebug('Generic modal who blocks scrolling', verbose);

		else if (removePopUp('#iubenda-cs-banner', null, null, 'overflow: auto;'))
			return outputDebug('#iubenda-cs-banner', verbose);

		else if (removePopUp('div[id^="sp_message_container_"]', 'sp-message-open'))
			return outputDebug('div[id^="sp_message_container_"]', verbose);

		else if (removePopUp('.truste_overlay[id^="pop-div"]') && removePopUp('.truste_box_overlay[id^="pop-div"]'))
			return outputDebug('.truste_overlay[id^="pop-div"]', verbose);

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
	setTimeout(launchAllDetection, 300);
	setTimeout(launchAllDetection, 1000);
	setTimeout(launchAllDetection, 2000);
	setTimeout(launchAllDetection, 5000);
})();
