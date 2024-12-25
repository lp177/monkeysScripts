// ==UserScript==
// @name            Netflix - History button
// @description     Add button history on netflix top bar
// @author          lp177
// @namespace       lp177
// @version         1.0002
// @match           https://www.netflix.com/*
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=www.netflix.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Netflix/HistoryButtons.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Netflix/HistoryButtons.js
// ==/UserScript==
function tryToInsertBt(
    containerSelector,
    className = "",
    myBtId = "bt177n456486u",
) {
    if (
        !document.querySelector(containerSelector) ||
        document.querySelector("#" + myBtId)
    )
        return false;
    document
        .querySelector(containerSelector)
        .insertAdjacentHTML(
            "beforeend",
            '<li id="' +
                myBtId +
                '" class="' +
                className +
                '"><a href="/viewingactivity">History</a></li>',
        );
    return true;
}
function addBt() {
    if (!tryToInsertBt("#hd .aro-genre-list ul"))
        tryToInsertBt(".main-header ul", "navigation-tab");
}
setTimeout(addBt, 1000);
setInterval(addBt, 10000);
