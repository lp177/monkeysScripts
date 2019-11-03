// ==UserScript==
// @name            Google translate - Switch language with tab touch
// @description     Switch language with the tab touch on Google Translate
// @author          lp177
// @namespace       lp177
// @version         1.0002
// @include         /^http(s)?://(www\.)?translate.google.com/.+$/
// @grant           none
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
    if (e.keyCode != 9 || ! document.querySelector( '.jfk-button-img' ) )
        return false;

    e.preventDefault();

    dispatchMouseEvent( document.querySelector( '.jfk-button-img' ), 'mousedown', true, true );
    dispatchMouseEvent( document.querySelector( '.jfk-button-img' ), 'mouseup', true, true );
    dispatchMouseEvent( document.querySelector( '.jfk-button-img' ), 'click', true, true );

    return false;
}

function eventMap()
{
    document.body.addEventListener( 'keydown', switchLang, false );
}

setInterval( eventMap, 10000 );

eventMap();