// ==UserScript==
// @version         3.0001
// @name            Youtube - Hide right column
// @description     Hide right column of recommendations and those at the end of the video
// @include         /^http(s)?://(www\.)?youtube\.com/*
// @grant           none
// @namespace       lp177
// @author          lp177
// @run-at          document-start
// @tag             UI
// @icon            https://www.google.com/s2/favicons?domain=www.youtube.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumn.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Youtube/HideRightColumn.js
// ==/UserScript==
(function () {
    "use strict";
    function apply_css(selector, css) {
        if (typeof selector != "string") {
            for (const select of selector) apply_css(select, css);
            return;
        }
        const element = document.querySelector(selector);
        if (!element || element.getAttribute("style") == css) return;
        element.setAttribute("style", css);
    }
    function resize_video() {
        if (
            document.querySelector(
                ".ytp-large-width-mode .video-stream.html5-main-video, .ytp-fullscreen .video-stream.html5-main-video, .ytp-player-minimize .video-stream.html5-main-video",
            )
        ) {
            document
                .querySelector(".ytp-miniplayer-expand-watch-page-button")
                ?.addEventListener("click", () =>
                    setTimeout(resize_video, 300),
                );
            return;
        }
        let width = document.querySelector(
            ".video-stream.html5-main-video",
        )?.clientWidth;
        let height = document.querySelector(
            ".video-stream.html5-main-video",
        )?.clientHeight;
        if (height >= width) return; // console.error('Avoid video deformation');
        width = document.querySelector(".html5-video-player")?.clientWidth;
        height = document.querySelector(".html5-video-player")?.clientHeight;
        if (!width || !height) return; // console.error('Fail to extract width&height for video player');
        width = "width:" + String(width) + "px;";
        height = "height:" + String(height) + "px;";
        apply_css("video.video-stream", width + height);
    }
    function hide() {
        apply_css(
            "html",
            "max-width:100%;x-overflow:hidden;font-size:10px;font-family:Roboto,Arial,sans-serif;",
        );
        apply_css("#related", "display: none !important;");
        apply_css(
            ["#columns #secondary", "#chat-container"],
            "display: none !important;",
        );
        resize_video();
    }
    // content reloaded in ajax ?
    setInterval(hide, 20000);
    var time = 0;
    while (time < 15000) {
        time += 100;
        setTimeout(hide, time);
    }
    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
    window.addEventListener("resize", debounce(hide, 250));
    const resize_buttons_selectors = [
        ".ytp-size-button",
        ".ytp-fullscreen-button",
        ".ytp-miniplayer-button",
    ];
    for (const selector of resize_buttons_selectors)
        document
            .querySelector(selector)
            ?.addEventListener("click", () => setTimeout(resize_video, 300));
})();
