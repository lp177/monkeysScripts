// ==UserScript==
// @name            Google translate - Switch language with tab touch
// @description     Switch language with the tab touch on Google Translate
// @author          lp177
// @namespace       lp177
// @version         1.0005
// @include         /^http(s)?://(www\.)?translate.google.com/.+$/
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=translate.google.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleTranslate/binding_tab_switch_langue.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleTranslate/binding_tab_switch_langue.js
// ==/UserScript==
function dispatchMouseEvent(target, var_args) {
    var e = document.createEvent("MouseEvents");
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);
}
function switchLang(e) {
    if (e.keyCode != 9) return false;
    const targetedBT = document.querySelector('span.notranslate:has(svg > path[d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"])');
    if (!targetedBT) return false;
    e.preventDefault();
    dispatchMouseEvent(targetedBT, "mousedown", true, true);
    dispatchMouseEvent(targetedBT, "mouseup", true, true);
    dispatchMouseEvent(targetedBT, "click", true, true);
    return false;
}
function eventMap() {
    document.body.addEventListener("keydown", switchLang, false);
}
setInterval(eventMap, 10000);
eventMap();

