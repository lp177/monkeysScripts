// ==UserScript==
// @name         Openclassroom - disable code editable on click
// @namespace    lp177
// @version      0.0001
// @description  disable code editable on click
// @author       lp177
// @match        https://openclassrooms.com/fr/courses/*
// @icon         https://www.google.com/s2/favicons?domain=openclassrooms.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/OpenClassRoom/disable_code_editable_on_click.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/OpenClassRoom/disable_code_editable_on_click.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    for(let pre of document.querySelectorAll('pre'))
		pre.addEventListener('click',(e)=>{e.stopImmediatePropagation();return false;})
})();