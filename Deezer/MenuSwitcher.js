// ==UserScript==
// @name            Deezer menu switcher
// @description     Switch the left menu on deezer desktop webapp
// @version         1.0001
// @grant           none
// @match           https://www.deezer.com/*
// @author          lp177
// @namespace       https://raw.githubusercontent.com/lp177/monkeysScripts/master/README.md
// @downloadURL     https://raw.githubusercontent.com/lp177/monkeysScripts/master/Deezer/MenuSwitcher.js
// @updateURL       https://raw.githubusercontent.com/lp177/monkeysScripts/master/Deezer/MenuSwitcher.js
// ==/UserScript==

(function() {
    'use strict';
    var is_open = 1;
    function init()
    {
        close();
        if (document.querySelector('#page_topbar'))
            document.querySelector('#page_topbar').insertAdjacentHTML( 'afterbegin', `<button class="topbar-notification" type="button" style="width: 40px;margin-right: 10px;height: 40px;" id="bt_177">Menu</button>` );

        document.querySelector( '#bt_177' ).addEventListener( 'click', () => ( is_open ) ? close() : open() );
    }
    function close()
    {
        is_open = 0;
        if (document.querySelector('#page_sidebar'))
            document.querySelector('#page_sidebar').style = 'display: none;';

        if (document.querySelector('#page_content'))
            document.querySelector('#page_content').style = 'margin-left: 0;';

        if (document.querySelector('#page_topbar'))
            document.querySelector('#page_topbar').style = 'left: 0;';
    }
    function open()
    {
        is_open = 1;
        if (document.querySelector('#page_sidebar'))
            document.querySelector('#page_sidebar').style = '';

        if (document.querySelector('#page_content'))
            document.querySelector('#page_content').style = '';

        if (document.querySelector('#page_topbar'))
            document.querySelector('#page_topbar').style = '';
    }
    window.onload = () => setTimeout( init, 1000 );
})();