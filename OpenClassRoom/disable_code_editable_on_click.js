// ==UserScript==
// @name         Openclassroom - disable code editable on click
// @namespace    lp177
// @version      0.0002
// @description  disable code editable on click and revert background for improve deluminate
// @author       lp177
// @match        https://openclassrooms.com/fr/courses/*
// @icon         https://www.google.com/s2/favicons?domain=openclassrooms.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/OpenClassRoom/disable_code_editable_on_click.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/OpenClassRoom/disable_code_editable_on_click.js
// @grant        none
// ==/UserScript==
(function () {
    "use strict";
    function apply() {
        for (let pre of document.querySelectorAll("pre")) {
            pre.addEventListener("click", (e) => {
                e.stopImmediatePropagation();
                return false;
            });
            pre.setAttribute(
                "style",
                "background-color:#fff!important;color:black!important;",
            );
            for (let operator of pre.querySelectorAll(".ace_operator"))
                operator.setAttribute("style", "color:black!important;");
            for (let ace of pre.querySelectorAll(".ace-openclassrooms"))
                ace.setAttribute(
                    "style",
                    "background-color:#fff!important;color:black!important;",
                );
            for (let code of pre.querySelectorAll("code"))
                code.setAttribute(
                    "style",
                    "background-color:#fff!important;color:black!important;",
                );
            for (let gutter of pre.querySelectorAll(".ace_gutter"))
                gutter.setAttribute(
                    "style",
                    "background-color:#fff!important;color:black!important;border-right:1px dotted #a9a9a9;",
                );
        }
    }
    apply();
    setTimeout(apply, 300);
    setTimeout(apply, 600);
    setTimeout(apply, 900);
    setTimeout(apply, 1500);
    setTimeout(apply, 2000);
    setTimeout(apply, 2500);
    setTimeout(apply, 3000);
    setTimeout(apply, 5000);
})();
