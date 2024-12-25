// ==UserScript==
// @name            Spotify - text selectable
// @description     Make album name selectable on Spotify
// @author          lp177
// @namespace       lp177
// @version         1.0004
// @match           https://open.spotify.com/*
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=open.spotify.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Spotify/textSelectable.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Spotify/textSelectable.js
// ==/UserScript==
function apply177() {
    if (!document.querySelector("style#injected177"))
        document.querySelector("head").insertAdjacentHTML(
            "beforeend",
            `<style type="text/css" id="injected177">
        *[draggable]{user-select:all !important;}
        </style>`,
        );
}
// Apply / reaply on new "page"
var pushState = history.pushState;
history.pushState = function () {
    pushState.apply(history, arguments);
    setTimeout(apply177, 300);
};
setTimeout(apply177, 1000);
setTimeout(apply177, 100);
