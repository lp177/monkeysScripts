// ==UserScript==
// @name            Google translate - Switch language with tab touch
// @description     Switch language with the tab touch on Google Translate
// @author          lp177
// @namespace       lp177
// @version         1.0004
// @include         /^http(s)?://(www\.)?translate.google.com/.+$/
// @grant           none
// @icon            https://www.google.com/s2/favicons?domain=translate.google.com
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleTranslate/binding_tab_switch_langue.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleTranslate/binding_tab_switch_langue.js
// ==/UserScript==

function dispatchMouseEvent( target, var_args )
{
    var e = document.createEvent( 'MouseEvents' );
    e.initEvent.apply( e, Array.prototype.slice.call( arguments, 1 ) );
    target.dispatchEvent( e );
}

function switchLang( e )
{
    const targetedBT = document.evaluate("//i[text()='swap_horiz']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (e.keyCode != 9 || ! targetedBT )
        return false;

    e.preventDefault();

    dispatchMouseEvent( targetedBT, 'mousedown', true, true );
    dispatchMouseEvent( targetedBT, 'mouseup', true, true );
    dispatchMouseEvent( targetedBT, 'click', true, true );

    return false;
}

function eventMap()
{
    document.body.addEventListener( 'keydown', switchLang, false );
}

setInterval( eventMap, 10000 );

eventMap();