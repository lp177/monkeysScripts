// ==UserScript==
// @name         Woodbrass - normal size scroolbar
// @namespace    lp177
// @version      0.0001
// @description  Reset scroolbar to usable size...
// @author       lp177
// @match        https://www.woodbrass.com/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?domain=www.woodbrass.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Woodbrass/normal_size_scroolbar.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Woodbrass/normal_size_scroolbar.js
// ==/UserScript==

(function() {
    'use strict';
    document.head.insertAdjacentHTML( 'beforeend', '<style>body::-webkit-scrollbar{width:10px !important;}</style>' )
})();