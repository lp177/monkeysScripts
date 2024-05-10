// ==UserScript==
// @version      1.00002
// @name         Ubereat - Focus traking map, remove useless UI, notify on delivery status change
// @namespace    lp177
// @author       lp177
// @description  Remove header/footer for use as fullscreen tracking map on traking order page
// @match        https://www.ubereats.com/fr/orders/*
// @match        https://www.ubereats.com/orders/*
// @icon         https://www.google.com/s2/favicons?domain=www.ubereats.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/Uber/focus_tracking_map.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/Uber/focus_tracking_map.js
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
    var last_status=localStorage.getItem('ubereat_alert_on_change');
    function countItemsHighlightable()
    {
        const items=document.querySelectorAll('.cw,.f1,.fq,.fj,.fl');//fj fk fl eg eh fm fn
        return (!items||!items.length)?0:items.length;
    }
    var highlightableItemsCount=countItemsHighlightable();
    function refreshIfCountItemsHighlightableChange()
    {
        const actualCount=countItemsHighlightable();
        if (actualCount!=highlightableItemsCount)
            location.reload();
        window.setTimeout(refreshIfCountItemsHighlightableChange,15000);
    }
    function notifyStatusChange()
    {
        const status=document.querySelector('[data-testid="active-order-sticky-eta"] div');
        if(!status)return;
        if (last_status!=null&&last_status!=status.innerText)
            GM_notification({
              title: "UberEat Traking",
              text: status.innerText,
              url: location.href
            });
        last_status = status.innerText;
        localStorage.setItem(
            'ubereat_alert_on_change',
            status.innerText
        );
    }
    function update()
    {
        if (document.querySelector('footer'))
        {
            document.querySelector('footer').remove();
            if (document.querySelector('#main-content > div:nth-of-type(2) > div:nth-of-type(2)'))
                document.querySelector('#main-content > div:nth-of-type(2) > div:nth-of-type(2)').setAttribute('style','bottom:0px;top:0px;');
            if (document.querySelector('header'))
                document.querySelector('header').remove();
            if (document.querySelector('#main-content > div:last-of-type > div:last-of-type'))
                document.querySelector('#main-content > div:last-of-type > div:last-of-type').setAttribute('style','top:0!important;bottom:0!important;');
            if(document.querySelector('#main-content > div'))
                document.querySelector('#main-content > div').setAttribute('style','max-width:250px;');
        }
        if (document.querySelector('div[style="top:0!important;bottom:0!important;"]:has(svg)'))
            document.querySelector('div[style="top:0!important;bottom:0!important;"]:has(svg)').remove();
        if (document.querySelector('video[data-testid="video-html-player"]'))
            document.querySelector('video[data-testid="video-html-player"]').remove();
        if (document.querySelector('a[href^="/fr/feed?promoCode="]'))
            document.querySelector('a[href^="/fr/feed?promoCode="]').remove();
    }
    document.querySelector('head').insertAdjacentHTML(
        'beforeend',
        `<style type="text/css" id="injected177">div[style="user-select: none; pointer-events: all;"] > div{box-shadow: 0 0 10px 10px green !important;}</style>`
    )
    document.querySelector('body').setAttribute('style', 'overflow:hidden');
    update();
    window.setInterval(notifyStatusChange, 3000);
    window.setTimeout(update, 300);
    window.setTimeout(update, 1000);
    window.setTimeout(update, 3000);
    window.setTimeout(()=>{highlightableItemsCount=countItemsHighlightable()},20000);
    window.setTimeout(refreshIfCountItemsHighlightableChange,25000);
    window.setTimeout(window.location.reload.bind(window.location), document.body.innerText.search('Commande en cours de préparation…')<1?60000:20000);
})();
