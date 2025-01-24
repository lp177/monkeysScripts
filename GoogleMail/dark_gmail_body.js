// ==UserScript==
// @version      1.0011
// @name         Google mail - Dark gmail messages body
// @description  Make fully UI of gmail in dark mode including body of messages and area of new message & reply
// @match        https://mail.google.com/mail/u/0/*
// @grant        none
// @namespace    lp177
// @author       lp177
// @icon         https://www.google.com/s2/favicons?domain=mail.google.com
// @downloadURL  https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleMail/dark_gmail_body.js
// @updateURL    https://raw.githubusercontent.com/lp177/monkeysScripts/master/GoogleMail/dark_gmail_body.js
// ==/UserScript==

(function () {
    "use strict";
    let escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
        createHTML: (to_escape) => to_escape,
    });
    /* Original CSS extracted from
     ** https://userstyles.org/styles/159026/new-gmail-dark-theme-tweaks-gmail-2018#button_middle
     ** modified and tested for work with chrome + tampermonkey + deluminate extension
     */
    document
        .querySelector("head")
        .insertAdjacentHTML(
            "beforeend",
            escapeHTMLPolicy.createHTML(
                '<style type="text/css">.md-button{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;color:#fff;height:35px;border:none}h2.hP{color:white!important;}.md-button:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.md-button:active,.md-button:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.md-button:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.md-button-transparent{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;color:#fff;height:35px;border:none;border:1px solid #666;color:#999;background:0 0}.md-button-transparent:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.md-button-transparent:active,.md-button-transparent:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.md-button-transparent:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.md-button-transparent:active,.md-button-transparent:focus,.md-button-transparent:focus:hover,.md-button-transparent:hover{background-color:transparent;border:1px solid #666}.md-button-transparent:active,.md-button-transparent:focus:hover,.md-button-transparent:hover{color:#aaa}.md-button-transparent:hover{box-shadow:inset 10000px 0 0 rgba(255,255,255,.05)}.md-button-transparent:active,.md-button-transparent:focus:hover{box-shadow:inset 10000px 0 0 rgba(255,255,255,.07)}.qp{background-color:transparent}.z0 .L3{background-color:#d44b3d;color:#e0e0e0;border-radius:24px}.z0 .L3:focus,.z0 .L3:hover{background-color:#d44b3d;box-shadow:inset 10000px 0 0 rgba(0,0,0,.05)}.z0 .L3:active{background-color:#d44b3d;box-shadow:inset 10000px 0 0 rgba(0,0,0,.1)}.z0 .L3::before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);filter:invert(90%)}.wT .CL,.wT .TO,.wT .ah9{border-radius:0 16px 16px 0}.wT .CL:hover,.wT .TO:hover,.wT .ah9:hover{background:rgba(255,255,255,.1)}.wT .CL:active,.wT .TO:active,.wT .ah9:active{background:rgba(255,255,255,.2)}.wT .TO.nZ,.wT .n3 .byl:first-child .aim:first-child .nZ{background-color:rgba(255,255,255,.2)}.wT .TO.nZ:hover,.wT .n3 .byl:first-child .aim:first-child .nZ:hover{background:rgba(255,255,255,.3)}.wT .TO .aHS-bnt .qj,.wT .TO .aHS-bnt .qj::before{opacity:1!important;background-image:none;-webkit-mask:url(https://www.gstatic.com/images/icons/material/system/1x/inbox_white_20dp.png) no-repeat center;mask:url(https://www.gstatic.com/images/icons/material/system/1x/inbox_white_20dp.png) no-repeat center;width:20px;height:20px;background-color:#d44b3d}.wT .TO .aHS-bnw .qj{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png);opacity:1}.wT .TO .aHS-bu1 .qj{background-image:url(https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_upcoming_clr_24dp_r5.png);filter:brightness(1.5);opacity:1!important}.bhZ.bjB,.bhZ.bym{background:#111!important}.bhZ.bym .aj5{background-color:#212121}.aj5.J-KU-Jg{border-top-color:#212121}.aic{background:0 0}.bh>.adv .adx{background:#424242;box-shadow:inset 0 0 0 1px #000}#aso_search_form_anchor,.SK.ZF-zT,.gb_Te{border-radius:4px}#aso_search_form_anchor.gb_oe,.SK.ZF-zT{filter:invert(90%) hue-rotate(180deg)}.gb_fe .gb_Te,.gb_ie .gb_Xe{background:rgba(0,0,0,.15)}.gb_fe .gb_Te:hover,.gb_ie .gb_Xe:hover{background:rgba(0,0,0,.25)}.gb_Xe.gb_ff{background:#fff!important}.gb_Te.gb_bf button svg,.gb_Xe button svg{fill:#000}.gb_Te.gb_bf .gb_cf,.gb_cf::placeholder,.gb_gf::placeholder{color:#dedede!important}#\:ht{background-color:#eee;color:#111}.bAp.b8.UC .vh{border-radius:2px;box-shadow:none;background-color:#242424}.bAo>.ad::before,div.b8 .a8k::before{border-radius:2px;background:#5e5e5e}.bAo>.ad,div.b8 .a8k{font-family:Roboto;text-transform:uppercase}.zA:hover{box-shadow:inset 10000px 0 0 rgba(255,255,255,.05)!important}.btb,.zA:hover:active{box-shadow:inset 10000px 0 0 rgba(255,255,255,.1)!important}.zE{color:#fff}.aeJ{overflow-y:auto}.brc{border-radius:16px}.aOd.T-I,.ar{border-radius:0}.Bn{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;color:#fff;height:35px;border:none;border:1px solid #666;color:#999;background:0 0;color:rgba(255,255,255,.7);border-color:transparent!important}.Bn:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.Bn:active,.Bn:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.Bn:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.Bn:active,.Bn:focus,.Bn:focus:hover,.Bn:hover{background-color:transparent;border:1px solid #666}.Bn:active,.Bn:focus:hover,.Bn:hover{color:#aaa}.Bn:hover{box-shadow:inset 10000px 0 0 rgba(255,255,255,.05)}.Bn:active,.Bn:focus:hover{box-shadow:inset 10000px 0 0 rgba(255,255,255,.07)}.Bn:hover{color:rgba(255,255,255,.9)}.apM-z6,.apM-zT{background-color:#212121;color:#dedede}.J-KU-KO.aIf-aLe::before{background-color:#e5938b;background-color:#ff6d54}.J-KU-KO.aIf-aLe .aKz{color:#e5938b;color:#ff6d54}.J-KU-KO>.aIf-aLf{background-image:none;-webkit-mask:url(https://www.gstatic.com/images/icons/material/system/1x/inbox_white_20dp.png) no-repeat center;mask:url(https://www.gstatic.com/images/icons/material/system/1x/inbox_white_20dp.png) no-repeat center;width:20px;height:20px;background-color:#e5938b;background-color:#ff6d54}.J-KU-KO.aKe-aLe::before{background-color:#70a6ff;color:#fff}.J-KU-KO.aKe-aLe .aKz{color:#70a6ff}.J-KU-KO>.aKe-aLf{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/people_gm_blue600_20dp.png);filter:brightness(170%) hue-rotate(30deg)}.J-KU-KO.aJi-aLe::before,.aAA .aJi-aLe .aDG{background-color:#5ec570;color:#fff}.J-KU-KO.aJi-aLe .aKz{color:#5ec570}.J-KU-KO>.aJi-aLf{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/local_offer_gm_green600_20dp.png);filter:brightness(130%) hue-rotate(10deg)}.J-KU-KO.aH2-aLe::before,.aAA .aH2-aLe .aDG{background-color:#fa7b17;color:#fff}.J-KU-KO.aH2-aLe .aKz{color:#fa7b17}.J-KU-KO>.aH2-aLf{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/info_gm_orange500_20dp.png)}.J-KU-KO.aHE-aLe::before,.aAA .aHE-aLe .aDG{background-color:#c38bf4;color:#fff}.J-KU-KO.aHE-aLe .aKz{color:#c38bf4}.J-KU-KO>.aHE-aLf{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/forum_gm_purple500_20dp.png)}.Bu,.Su .nH.aBz,.bAn,.bAt,.bAt>tbody,.bAt>tbody>tr,.iC{background:#111!important}.nH.byY .hP{color:#dedede;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;}.iY{background:#111!important}.nH.byY .hk>.L3,.nH.byY .xE .G-atb .T-I-ax7{filter:invert(100%)}.hU.hM{border-radius:0}.hV.hM{border-radius:0}.hx .gD{color:#aaa!important;}.ac2,.g2,.go,.hI .g3,.hx .hb,.iv .g3{color:#999}.aju{height:40px;padding-top:20px;background-color:#111}.ams.bkH::before,.hB,.mL{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/reply_white_20dp.png)}.ams.bkI::before,.mK{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/reply_all_white_20dp.png)}.ams.bkG::before,.mI{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/forward_white_20dp.png)}.hA{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/more_vert_white_20dp.png)}.bi4>.T-KT:not(.T-KT-Jp):not(.byM)::before{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/star_border_white_20dp.png)}.T-KT-Jp::before{filter:brightness(120%)}.ha .pH-A7{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/label_important_outline_white_20dp.png)}.ha .a9q{opacity:.8}.gW{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/attachment_white_20dp.png);opacity:.6}.g6{color:#bbb}.adI .B9{color:#78b4f8}.adI .J-JN-M-I{color:#999}.adI .J-JN-M-I:hover{background-color:#303030}.adI .J-JN-M-I-JG{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_white_20dp.png);opacity:.54}.adI .adJ>.hc{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/translate_white_20dp.png)}.adI .ob>.adG{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/chevron_right_white_20dp.png)}.bzx{background-color:#212121;color:#dedede;border-radius:2px}.bzx .bzq,.bzx .bzx{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;color:#fff;height:35px;border:none;box-shadow:none}.bzx .bzq:hover,.bzx .bzx:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.bzx .bzq:active,.bzx .bzq:focus:hover,.bzx .bzx:active,.bzx .bzx:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.bzx .bzq:focus,.bzx .bzx:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.gs>div:not(.gE):not(.wj){filter:invert(93.2%) hue-rotate(180deg);background-color:#fff}.gs>div:not(.gE):not(.wj) img{filter:invert(100%) hue-rotate(180deg) contrast(120%) saturate(120%)}.gs>div:not(.gE):not(.wj) ::selection{color:#78b4f8!important;background:#000}div.ajR{background-color:#313131}div.ajR .ajT{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/more_horiz_white_20dp.png)}div.ajR:focus,div.ajR:hover{background-color:#414141}.hx .h7 .gA,.wR>.amn{background-color:#111}.bra{color:#78b4f8;border-radius:4px;box-shadow:inset 0 0 0 1px #555;font-family:Roboto}.bra:active{background-color:#212121;box-shadow:inset 0 0 0 1px #555}.brb{box-shadow:inset 0 -1px 0 0 rgba(172,172,172,.122)}.amn>.ams{color:#999;border-radius:4px;box-shadow:inset 0 0 0 1px #555;font-family:Roboto;text-transform:uppercase}.bra:focus{background-color:rgba(95,99,104,.122)}.ams:active{background-color:#212121;box-shadow:inset 0 0 0 1px #555}.SI .G-atb{filter:invert(94%);border-bottom:1px solid #e0e0e0;box-shadow:0 4px 12px 2px #fff}.J-M,.d-Na-JG-M,.t9{background-color:#242424;border-radius:4px;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.J-JK,.J-LC,.J-N,.d-Na-N,.ua{color:#dedede}.J-JK-JT,.J-LC-JT,.J-N .J-N-JT,.J-N-JT,.J-N:hover,.bk5,.d-Na-N-JW{color:#e9e9e9!important;background-color:#333!important;border-color:transparent}.J-Ks-KO .J-N-Jz{color:#e9e9e9!important}.J-Ks-KO .J-N-Jo,.J-LC-Jo,.J-N-JX.aDE,.J-Ph-hFsbo,.asi .J-Ks-KO::before,.d-Na-N .d-Na-J3{filter:invert(1)}.J-N-JT .J-N-Jz,.J-N-JW .J-N-Jz{color:var(--text-color-1)}.J-awr,.asc,.asd{color:#999}.J-Kh,.d-Na-axR{border-top:1px solid #333}.afQ{color:#dedede}.e{color:#d44b3d}.bqf:focus{box-shadow:inset 0 -2px 0 0 #d44b3d}.agd .J-M-JJ input{background:#242424;color:#dedede}.A0{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/search_white_20dp.png)}.bug,div.Kj-JD{background-color:#212121;border-radius:2px}.bul,span.Kj-JD-K7-K0{font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:#dedede}div.Kj-JD-Jz{color:#999}.a3d,.a4P,.pK{color:#7f7f7f}span.Kj-JD-K7-Jq{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/close_white_20dp.png)}.T-I-atl,.bug-Jl>.J-at1-auR,.bvs>.Kj-JD-Jl>button.J-at1-auR,div.Kj-JD-Jl>button.J-at1-auR{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;color:#fff;height:35px;border:none}.T-I-atl:hover,.bug-Jl>.J-at1-auR:hover,.bvs>.Kj-JD-Jl>button.J-at1-auR:hover,div.Kj-JD-Jl>button.J-at1-auR:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.T-I-atl:active,.T-I-atl:focus:hover,.bug-Jl>.J-at1-auR:active,.bug-Jl>.J-at1-auR:focus:hover,.bvs>.Kj-JD-Jl>button.J-at1-auR:active,.bvs>.Kj-JD-Jl>button.J-at1-auR:focus:hover,div.Kj-JD-Jl>button.J-at1-auR:active,div.Kj-JD-Jl>button.J-at1-auR:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.T-I-atl:focus,.bug-Jl>.J-at1-auR:focus,.bvs>.Kj-JD-Jl>button.J-at1-auR:focus,div.Kj-JD-Jl>button.J-at1-auR:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.Kj-JD .Kj-JD-Jl button,.a8Y>.T-I-ax7,.aJ7 .Kj-JD-Jl button,.bcY>.a7W>.T-I.T-I-ax7,.bum .T-bfE,.pD .Kj-JD-Jl button{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;color:#fff;height:35px;border:none;border:1px solid #666;color:#999;background:0 0}.Kj-JD .Kj-JD-Jl button:hover,.a8Y>.T-I-ax7:hover,.aJ7 .Kj-JD-Jl button:hover,.bcY>.a7W>.T-I.T-I-ax7:hover,.bum .T-bfE:hover,.pD .Kj-JD-Jl button:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.Kj-JD .Kj-JD-Jl button:active,.Kj-JD .Kj-JD-Jl button:focus:hover,.a8Y>.T-I-ax7:active,.a8Y>.T-I-ax7:focus:hover,.aJ7 .Kj-JD-Jl button:active,.aJ7 .Kj-JD-Jl button:focus:hover,.bcY>.a7W>.T-I.T-I-ax7:active,.bcY>.a7W>.T-I.T-I-ax7:focus:hover,.bum .T-bfE:active,.bum .T-bfE:focus:hover,.pD .Kj-JD-Jl button:active,.pD .Kj-JD-Jl button:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.Kj-JD .Kj-JD-Jl button:focus,.a8Y>.T-I-ax7:focus,.aJ7 .Kj-JD-Jl button:focus,.bcY>.a7W>.T-I.T-I-ax7:focus,.bum .T-bfE:focus,.pD .Kj-JD-Jl button:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.Kj-JD .Kj-JD-Jl button:active,.Kj-JD .Kj-JD-Jl button:focus,.Kj-JD .Kj-JD-Jl button:focus:hover,.Kj-JD .Kj-JD-Jl button:hover,.a8Y>.T-I-ax7:active,.a8Y>.T-I-ax7:focus,.a8Y>.T-I-ax7:focus:hover,.a8Y>.T-I-ax7:hover,.aJ7 .Kj-JD-Jl button:active,.aJ7 .Kj-JD-Jl button:focus,.aJ7 .Kj-JD-Jl button:focus:hover,.aJ7 .Kj-JD-Jl button:hover,.bcY>.a7W>.T-I.T-I-ax7:active,.bcY>.a7W>.T-I.T-I-ax7:focus,.bcY>.a7W>.T-I.T-I-ax7:focus:hover,.bcY>.a7W>.T-I.T-I-ax7:hover,.bum .T-bfE:active,.bum .T-bfE:focus,.bum .T-bfE:focus:hover,.bum .T-bfE:hover,.pD .Kj-JD-Jl button:active,.pD .Kj-JD-Jl button:focus,.pD .Kj-JD-Jl button:focus:hover,.pD .Kj-JD-Jl button:hover{background-color:transparent;border:1px solid #666}.Kj-JD .Kj-JD-Jl button:active,.Kj-JD .Kj-JD-Jl button:focus:hover,.Kj-JD .Kj-JD-Jl button:hover,.a8Y>.T-I-ax7:active,.a8Y>.T-I-ax7:focus:hover,.a8Y>.T-I-ax7:hover,.aJ7 .Kj-JD-Jl button:active,.aJ7 .Kj-JD-Jl button:focus:hover,.aJ7 .Kj-JD-Jl button:hover,.bcY>.a7W>.T-I.T-I-ax7:active,.bcY>.a7W>.T-I.T-I-ax7:focus:hover,.bcY>.a7W>.T-I.T-I-ax7:hover,.bum .T-bfE:active,.bum .T-bfE:focus:hover,.bum .T-bfE:hover,.pD .Kj-JD-Jl button:active,.pD .Kj-JD-Jl button:focus:hover,.pD .Kj-JD-Jl button:hover{color:#aaa}.Kj-JD .Kj-JD-Jl button:hover,.a8Y>.T-I-ax7:hover,.aJ7 .Kj-JD-Jl button:hover,.bcY>.a7W>.T-I.T-I-ax7:hover,.bum .T-bfE:hover,.pD .Kj-JD-Jl button:hover{box-shadow:inset 10000px 0 0 rgba(255,255,255,.05)}.Kj-JD .Kj-JD-Jl button:active,.Kj-JD .Kj-JD-Jl button:focus:hover,.a8Y>.T-I-ax7:active,.a8Y>.T-I-ax7:focus:hover,.aJ7 .Kj-JD-Jl button:active,.aJ7 .Kj-JD-Jl button:focus:hover,.bcY>.a7W>.T-I.T-I-ax7:active,.bcY>.a7W>.T-I.T-I-ax7:focus:hover,.bum .T-bfE:active,.bum .T-bfE:focus:hover,.pD .Kj-JD-Jl button:active,.pD .Kj-JD-Jl button:focus:hover{box-shadow:inset 10000px 0 0 rgba(255,255,255,.07)}.bum{color:#999}.bum .T-bfE:first-child{border-radius:4px 0 0 4px}.bum .T-bfE{border-radius:0;border-color:#333}.bum .T-bfE:last-child{border-radius:0 4px 4px 0}.bum .T-bfE-Jp{background-color:#d44b3d!important;color:#fff!important;border:1px solid transparent!important}.buh{filter:invert(95%) hue-rotate(180deg) sepia(26%)}.a90.T-I-ax7{opacity:.8}.a90.T-I-ax7:hover{opacity:1}.a8Y>.a95{border-color:#666;border-right:none}.T-P{background-color:#111;border-color:#111}.T-P .a7V{color:#dedede}.T-P .a7V .T-I.T-I-ax7.T-I-Jp{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;height:35px;border:none;color:#fff}.T-P .a7V .T-I.T-I-ax7.T-I-Jp:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.T-P .a7V .T-I.T-I-ax7.T-I-Jp:active,.T-P .a7V .T-I.T-I-ax7.T-I-Jp:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.T-P .a7V .T-I.T-I-ax7.T-I-Jp:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.T-P .a7V .T-I.T-I-ax7.T-I-Jp:hover{border:none}.T-P .a7V .T-I.T-I-ax7.by6{border-radius:4px 0 0 4px}.T-P .a7V .T-I.T-I-ax7.by5{border-radius:0 4px 4px 0}.a80.Kj-JD-K7,.a8Y.Kj-JD-Jl{border-color:#111}.a80.Kj-JD-K7{box-shadow:0 5px 10px -5px #111}.aJ7 .aI0{border-color:transparent}.T-Jo-Jp{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/check_box_white_20dp.png)}.pJ{border-color:#333}.Kj-JD-Jz .e,.Kj-JD-Jz a{color:#d44b3d!important}.byh{color:#d44b3d}.aFe,.bvs .bve.J-JN-M-I>.J-JN-M-I-Jm,.byf{color:#999}.byd{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/help_outline_white_20dp.png)}.byf::before{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/radio_button_unchecked_white_24dp.png)}.bye:checked+.byf::before{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/radio_button_checked_white_24dp.png)}.J-JN-M-I-JG{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_white_20dp.png)}.Ht{background:#0b0b0b}.Hp{color:#dedede}.M9,.aoP .Ar{background:#111}.aoT{background:#111;color:#999}.eV>.oj .vO,.wO.nr{background:#111;color:#dedede}.J-JN-M-I,.az9,.gO,.gQ,.vN>.vT{color:#999}.vR>.vN{background-color:#212121;border-color:#212121}.vR>.vN:hover{background-color:#303030;border-color:#303030}.Am{background:#111;color:#dedede}.aDg>.aDj{background:#111}.J-Z-M-I-J6-H>.J-Z-M-I-JG,.Xv.T-I.J-JN-M-I>.J-JN-M-I-JG,.aaA,.dv,.og.T-I-J3{filter:invert(100%)}.oG{color:#dedede}#\:1dv,.bA3>div{background:#111}#\:1f2,.aZ>.J-Z{background:#111;box-shadow:0 4px 5px 0 rgba(0,0,0,.24),0 1px 10px 0 rgba(0,0,0,.22),0 2px 4px -1px rgba(0,0,0,.3)}.aZ .J-Z-axO .J-Z-M-I-Jm{color:#999}.aiv{background:#242424}.ah .Jd-Je{background:#363636}.aiv .am>.ao5,.aiv .aq,.uR .aq{color:#dedede}.aiv .am>.Sr{color:#999}.ah.aiv{box-shadow:none;border-radius:2px}.vN>.vM{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/close_white_16dp.png)}.HM .btC,.HM .et,.IG,.aC3{background:#111}.HM .I5{border-color:#363636}.HM .I5:hover{box-shadow:0 1px 2px 0 rgba(0,0,0,.302),0 2px 6px 2px rgba(0,0,0,.149);border-color:#424242}.aDi::before{border-color:#363636!important}.aDi::before:hover{box-shadow:0 1px 2px 0 rgba(0,0,0,.302),0 2px 6px 2px rgba(0,0,0,.149)!important;border-color:#424242!important}.J-JN-M-I{color:#999!important}.Un::after,.az2>.J-JN-M-I-JG{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_white_20dp.png)}#loading{background-color:#111!important}.msgb{color:#fff}.submit_as_link{color:#78b4f8}.brC-brG-avC{background-color:#111;border-color:rgba(255,255,255,.12)}.brC-brG-a1P-K0{color:#dedede}.brC-brG-K7-K0.brC-brG-K7-axY{color:#ccc}.brC-brG{background-color:transparent;border-left:0}.bq9{box-shadow:0 4px 5px 0 #000,0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.brC-brG-Jz-bBA,.brC-brG-Jz-bBA>svg,.brC-brG-a1R-JC,.brC-brG-a1R-K7,.brC-brG-bBB-JC,.brC-brG-bBB-K7{background-color:#111!important;color:#999;fill:#999}.brC-brG-bBC-a1r-aws,.brC-brG-bBF-a5b-aws::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAllBMVEX////8whv8whv8whv8whv8whv8whv8whv8whv8whv8whv8whv8whv8whv8whv8whv8whvVph9vXSmVeCWviyMvLy+8lCE7OC5VSivJnSBiUyqigSSIbybvuRzisB5IQS17Zij5sh/4rCD7vRz0lybyhynxgSvtbDDvdi33pyL2oiPzjCj0kSf6tx7wfCz1nCTucS8AAABcKO/hAAAAEHRSTlMAIEBwgJDAYBBQ8DDQ4LCgptWG6wAABK5JREFUeAG80Eu2xCAIhGGMDwhqrP2v9s7uqE+fmCL9beCHEko6cqntXy16mPyInaU5PvBWziQv63Xgq1nPN+sTd1xqEs904DZfh8RK1bFnZgvMLzzgK0kIq3gq5ITsICwTTh/geCHX541Ovs8r8kxGlGayzy7EmZ2bn+d9t+8IprJDEU/JPu+PFjPaTR6GobD44UcwiclpOE2bNk3f/ymnCeiamAWneN8VF1FjbJ9jK/IqHKgezT4ojh7T2O1akKmx7H5XYHsEnwr1bwFHm9kr9F8HtH/YiGf6hd43tx8DMNKKMPQ1plzlP48vT+0YAUy3LgT8+owDBjU3OF2S+5Fy/+NJAAYAQo0Wi0pI/X9GiucZCBHoepXZzAUYkHLvfrvuAQvEUGlHJ2kD9sihbzxgljMR6NXWk90Hs5yMe2Ga5cgERBIgS8GRUiwyutulJknSqDYW2QQakDFTjl182firfEt97gDcepDBr2jhzKNcbqq2Q67AogpcIEa73A90Yjn8F64ADdYUhmAPVEVwea0AXoPS5yM7Ul0DtoKzFDhDDKbX2G+0gn/0lNBJ7k/inIN8JrIO5IRR8l2scVYSgnwJmaz3zVBSGJOrE3hT9oJzoUoEM6PMniVAMwAveLdQTAAPoJF3oUYCyHDLfo0gAXIcs+zX7AR7sJiZW3aNDI70LlO2NUg4/0wBeh+LBelUPvBFVKcInamdBjovIYMT+DALQPUporXWtkH+gsrnsD4SJzpRLV/F229yqzoMBfDwJ7xgSNAWwMYiECfe/+pePty5M7edIpkD6W8DnNbCVWXcD3aXAOkrMLjR8x+Td3eLB9CvgJ1H/macLRxAtwL9wj9YejCAZgV6zyv8QCvEzrwjiX2wYAzAAN2QoJ9Y5jYHaEgws8qz3xigoHUP1npRolrzEi6sN1pKkitKYOYUz0ApGrkEBk4Te0og7wI28oEJjNyLeGY8gbARVkIB4AmEjTB9ASTRkk4h1aDjbZ6kk0v/EEy80YNULsLJ0J03u+uHRB2wB4JlcJNegom3W0hWCBtxYETQTsnAEgB+BUZqBhxDrK4EcqAGweagkOYCniGTbjpRAgEEQTUqLrEaANbgLA4GZsaMYj8o7EOBMVE1IaugdhR4EVtFgBAZMgi7gBAAr4K7Zjoj9OSRAU4TgNaF5fgAAjs4517D0BNRPy8xOYBQA5TIztM+AVohwAoXWWfQDKppg+D1AcQioE1erKH6Y0QCYGbiVdMJ2sg+4Y7EZEIAwQK3pRUWgBzcmBdiAGB4FQO9yYvQ4gmAgVWFnhX1UVoAQQ4GoOCh51MnB5C8In8TZ1K64gHIuq8RlkBquxyX2dnzX3EJlED/5arcNXg/uldPSVr8yBbT4SeGmFo+rTjUFT81xr/zxssQPjRr6ZeYbOUDrk/I8VsEaAH8ZgLzzxeV2cfrwDT7XyUCL9zUhj7GFPh9KsTtp8tvWUUfUK3dgswPj9BKt2ya7vifXnAprnQIc85OSk1n9q+8+pSk7q60G9NtugLcFNUuZXdGLv/m5c0gRVfWlxMsq8sqeT1Mdf6vOe0pr8tOk8NUt2Mv4efvJOU7yxe3snw/N89Oif4HA38rnAF+mUQAAAAASUVORK5CYII=);display:block;padding-bottom:30px}.brC-brG-bBF-a5b-pj{font-family:Roboto;text-transform:uppercase;font-weight:500;letter-spacing:.25px;font-size:.875rem;border-radius:4px;background-color:#d44b3d;color:#fff;height:35px;border:none;line-height:35px;padding:0 20px;margin-top:10px}.brC-brG-bBF-a5b-pj:hover{background-color:#d7574a;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12);color:#fff}.brC-brG-bBF-a5b-pj:active,.brC-brG-bBF-a5b-pj:focus:hover{background-color:#da6357;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);color:#fff;border:none}.brC-brG-bBF-a5b-pj:focus{background-color:#da6357;box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 1px 3px 1px rgba(0,0,0,.12)}.aT5-aOt-M{background:#242424;border-radius:2px;border:none;box-shadow:none}.brC-by0-P6-M-J8-JT{background:#333}.brC-by0-P6-M-K0,.brC-by0-P6-M-avC{color:#dedede}.brC-by0-P6-M-axR{border:none}.brC-by0-P6-M-J8-JX-Jw{filter:invert(100%)}.gb_h:hover a,.gb_z{border:1px solid #333}.gb_C,.gb_z{background:#111!important}.gb_T:hover .gb_O,.gb_T:hover .gb_X,.gb_h:hover .gb_m{background:#212121}.gb_T:hover a,.gb_Z:hover a{border:1px solid #212121}#gb a.gb_D,#gb a.gb_E,.gb_m,.gb_z{color:#fff}.gb_D,.gb_E{background:#212121}.gb_E{border-bottom:1px solid #212121;left:0;width:auto}.gb_I div.gb_K{background:#212121}.gb_9a.gb_ab,.gb_Eb{color:#e0e0e0}.gb_Fb,.gb_bb{color:#bbb}#gb .gb_Za.gb_Za a{color:#78b4f8}.gb_qb{background:#161616;border-top-color:#333}.gb_ub:hover{background:unset;box-shadow:inset 200px 200px rgba(255,255,255,.06)}.gb_ub:active{background:unset;box-shadow:inset 200px 200px rgba(255,255,255,.12)}#gb a.gb_0.gb_0{border:0;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:500;text-transform:uppercase;background:0 0;border:1px solid #666;color:#e0e0e0!important;cursor:pointer;border-radius:4px}#gb a.gb_0.gb_0:hover{box-shadow:inset 200px 200px rgba(255,255,255,.08);background-image:none}#gb a.gb_0.gb_0:active{box-shadow:inset 200px 200px rgba(255,255,255,.16);background-image:none}.gb_jb{background-color:#161616;border-top-color:#333}.iS{background:none !important;border:none !important;}.iS span:first-of-type{color:white !important;}.z0>.L3{background-color: #202124 !important;color:white !important;}</style>',
            ),
        );
    // Reply zone
    document
        .querySelector("head")
        .insertAdjacentHTML(
            "beforeend",
            escapeHTMLPolicy.createHTML(
                '<style type="text/css">.editable,.aoP,.Ar,.aC3,.aDj{ background-color: #000 !important; color: #fff !important; } .J-Z,.IG{ background: darkred !important; }.aC3:after{background:none !important;}</style>',
            ),
        );
    // Revert color of few images
    document
        .querySelector("head")
        .insertAdjacentHTML(
            "beforeend",
            escapeHTMLPolicy.createHTML(
                '<style type="text/css">.ajz{filter: invert(1);}.J-Kw.aUW .aaA{filter: invert(0);}</style>',
            ),
        );

})();

