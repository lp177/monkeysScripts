// ==UserScript==
// @name            Switch language with tab touch
// @description     Switch language with tab touch on Google Translate
// @version         0.3106
// @grant           none
// @include         /^http(s)?://(www\.)?translate.google.[a-z]{2,4}/.+$/
// @author          lp177
// @namespace       https://raw.githubusercontent.com/lp177/monkeysScripts/master/README.md
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleTranslate/binding_switch_langue.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleTranslate/binding_switch_langue.js
// ==/UserScript==

var verbose = false;

function dispatchMouseEvent(target, var_args)
{
    var e = document.createEvent("MouseEvents");
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    target.dispatchEvent(e);
}

function switchLang(e)
{
    if (e.keyCode != 9)
        return false;

    e.preventDefault();


    dispatchMouseEvent(document.querySelector('.jfk-button-img'), 'mousedown', true, true);
    dispatchMouseEvent(document.querySelector('.jfk-button-img'), 'mouseup', true, true);
    dispatchMouseEvent(document.querySelector('.jfk-button-img'), 'click', true, true);

    if (verbose)
        console.info( document.querySelector( '.jfk-button-img' ), 'clicked' );

    return false;
}

function eventMap()
{
    document.body.addEventListener('keydown', switchLang, false);
}

setInterval(eventMap, 10000);

eventMap();
