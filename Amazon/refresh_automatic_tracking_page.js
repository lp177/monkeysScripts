// ==UserScript==
// @version      0.002
// @name         Amazon - refresh
// @description  Auto Refresh regulary (180s) delivery tracking page
// @namespace    lp177
// @author       lp177
// @match        https://www.amazon.fr/progress-tracker/*
// @icon         https://www.google.com/s2/favicons?domain=amazon.fr
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/refresh_automatic_tracking_page.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Amazon/refresh_automatic_tracking_page.js
// ==/UserScript==
(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location),180000);
})();
