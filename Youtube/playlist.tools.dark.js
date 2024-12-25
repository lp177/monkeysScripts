// ==UserScript==
// @version      0.0001
// @name         Youtube - playlist.tools dark mode
// @description  Improve dark mode on https://playlist.tools/
// @namespace    lp177
// @author       lp177
// @match        https://playlist.tools/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=playlist.tools
// @grant        none
// @downloadURL         https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/playlist.tools.dark.js
// @updateURL           https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/playlist.tools.dark.js
// ==/UserScript==
(function () {
    "use strict";
    document.querySelector("head").insertAdjacentHTML(
        "beforeend",
        `<style type="text/css">
            :root
            {
                --v-background-base: #111111!important;
            }
            .v-application .indigo.lighten-1
            {
                background-color: #3c3c3c!important;
            }
            .v-application .indigo.darken-2,.v-application .indigo.darken-4
            {
                background-color: #1e1e1e!important;
            }
        </style>`,
    );
})();
