// ==UserScript==
// @version      0.0002
// @name         Console toolbox
// @description  Add tools and shortcuts in your browser's console
// @namespace    lp177
// @author       lp177
// @match        http://*/*
// @match        https://*/*
// @exclude      https://*.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=developer.chrome.com
// @grant        none
// @noframes
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Global/console_toolbox.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Global/console_toolbox.js
// ==/UserScript==
window.q = document.querySelector.bind(document);
window.qa = document.querySelectorAll.bind(document);
window.cl = console.log.bind(console);
window.ci = console.info.bind(console);
window.ce = console.error.bind(console);

