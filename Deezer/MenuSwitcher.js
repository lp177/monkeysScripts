// ==UserScript==
// @name            Deezer - menu switcher
// @description     Switch the left menu on deezer desktop webapp
// @author          lp177
// @namespace       lp177
// @version         1.0003
// @match           https://www.deezer.com/*
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=www.deezer.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Deezer/MenuSwitcher.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Deezer/MenuSwitcher.js
// ==/UserScript==
(function () {
    "use strict";
    var is_open = 1;
    function init() {
        close();
        if (!document.querySelector("#page_topbar")) return;
        document.querySelector("#page_topbar").insertAdjacentHTML(
            "afterbegin",
            `<button
                class="topbar-notification"
                type="button"
                style="width: 40px;margin-right: 10px;height: 40px;"
                id="bt_177"
            >Menu</button>`,
        );
        document
            .querySelector("#bt_177")
            .addEventListener("click", () => (is_open ? close() : open()));
    }
    function close() {
        is_open = 0;
        document.querySelector("#page_sidebar")?.style = "display: none;";
        document.querySelector("#page_content")?.style = "margin-left: 0;";
        document.querySelector("#page_topbar")?.style = "left: 0;";
    }
    function open() {
        is_open = 1;
        document.querySelector("#page_sidebar")?.style = "";
        document.querySelector("#page_content")?.style = "";
        document.querySelector("#page_topbar")?.style = "";
    }
    window.onload = () => setTimeout(init, 1000);
})();
