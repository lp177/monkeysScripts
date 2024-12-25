// ==UserScript==
// @name            Amazon - remove right bar
// @description     Hide the right basket menu on Amazon
// @author          lp177
// @namespace       lp177
// @version         1.0003
// @match           https://www.amazon.fr/*
// @match           https://www.amazon.com/*
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=www.amazon.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/removeRightBar.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/removeRightBar.js
// ==/UserScript==
(function () {
    "use strict";
    function update() {
        document.querySelector("#nav-flyout-ewc")?.remove();
        document
            .querySelector("#navbar")
            ?.setAttribute("style", "max-width:100%");
        document
            .querySelector("body")
            .setAttribute("style", "padding-right:0;");
    }
    update();
    setTimeout(update, 100);
    setTimeout(update, 300);
    setTimeout(update, 1000);
})();
