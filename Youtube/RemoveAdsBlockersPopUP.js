// ==UserScript==
// @version         1.0005
// @name            Youtube - Remove adblocker popup
// @description     Remove the popup previous each video who say that ads blockers are forbidden
// @include         /^http(s)?://(www\.)?youtube\.com/watch?*
// @grant        	none
// @namespace    	lp177
// @author       	lp177
// @icon         	https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveAdsBlockersPopUP.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/RemoveAdsBlockersPopUP.js
// ==/UserScript==

var stats={savedUrl:null};
function hide()
{
	var popup = document.querySelector('ytd-popup-container tp-yt-paper-dialog button-view-model');
	if (!popup||!popup.innerText.search('Ads'))
		return false;
	var max_move=0;
	while(popup.tagName!='YTD-POPUP-CONTAINER'&&max_move++<100)
		popup=popup.parentNode;
	if(popup.tagName!='YTD-POPUP-CONTAINER')
		return false;
	popup.remove();
	return true;
}
function execOnNewURL()
{
	if(window.location.href==stats.savedUrl)
		return;
	if(hide())
		stats.savedUrl=window.location.href;
}
setInterval(execOnNewURL, 1000);
