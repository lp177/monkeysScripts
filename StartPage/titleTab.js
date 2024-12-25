// ==UserScript==
// @version      0.0001
// @name         startpage.com - Set value keywords as title
// @description  Make usefull html title feature / tab names, on startpage.com website...
// @namespace    lp177
// @author       lp177
// @match        https://www.startpage.com/sp/search*
// @icon         https://www.google.com/s2/favicons?domain=startpage.com
// @grant        none
// ==/UserScript==
(function () {
    "use strict";
    const q = document.querySelector("#q"),
        title = document.querySelector("title");
    if (q && title) title.innerText = q.value;
    if (document.querySelector("#ex-qi-tp-container"))
        document.querySelector("head").insertAdjacentHTML(
            "beforeend",
            `<style type="text/css" id="injected177">
                .layout-web--dark, .layout-web--dark .layout-web__body, .layout-web--night, .layout-web--night .layout-web__body, .w-gl--dark, .w-gl--night
                {
                    background: black !important;
                }
            </style>`,
        );
    else
        document.querySelector("head").insertAdjacentHTML(
            "beforeend",
            `<style type="text/css" id="injected177">
                .layout-web__body
                {
                    margin: 102px auto 0 auto !important;
                    max-width: max-content !important;
                }
                .layout-web--dark, .layout-web--dark .layout-web__body, .layout-web--night, .layout-web--night .layout-web__body, .w-gl--dark, .w-gl--night
                {
                    background: black !important;
                }
                .layout-web__mainline
                {
                    flex: none !important;
                    max-width: 100% !important;
                    margin-right: 10px !important;
                }
                .mainline-results
                {
                    max-width: 100% !important;
                }
            </style>`,
        );
})();
