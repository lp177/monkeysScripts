// ==UserScript==
// @version      2024-03-14
// @name         Coinbase - close cookies consent banner
// @description  Close automaticaly the annoying bottom banner who pop at each reload until you accept marketing cookies
// @namespace    lp177
// @author       lp177
// @match        https://www.coinbase.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coinbase.com
// @grant        none
// ==/UserScript==
(function () {
    "use strict";
    function search_and_destroy(max_retry = 50) {
        console.info("search_and_destroy");
        let neighbour = document.querySelector(
            'div[class^="Toasts__Container-"]+div p a[href^="https://www.coinbase.com/legal/cookie"]',
        );
        if (!neighbour)
            return setTimeout(() => search_and_destroy(max_retry - 1), 300);
        let button = neighbour.parentNode.parentNode.querySelector(
            "div > button:first-of-type",
        );
        if (!button)
            return setTimeout(() => search_and_destroy(max_retry - 1), 300);
        if (button.innerText === "Close" || button.innerText === "Fermer") {
            console.info("click");
            button.click();
        } else console.info("bad text:", button.innerText);
    }
    search_and_destroy();
})();
