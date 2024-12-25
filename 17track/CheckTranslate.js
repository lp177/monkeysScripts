// ==UserScript==
// @name            17Track - check translate by default
// @namespace       lp177
// @author          lp177
// @version         0.0002
// @description     Check translate checkbox on 17track.net on each track
// @match           https://t.17track.net/*
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=t.17track.net
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/17track/CheckTranslate.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/17track/CheckTranslate.js
// ==/UserScript==
(function () {
    "use strict";
    setTimeout(
        () =>
            Array.from(
                document.querySelectorAll('[yq-data="bindTranslate"]'),
            ).forEach((el) => el.click()),
        2000,
    );
})();
