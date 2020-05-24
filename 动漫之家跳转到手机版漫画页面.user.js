// ==UserScript==
// @name         动漫之家跳转到手机版漫画页面
// @namespace    https://liu233w.com/dmzj-go-mobile
// @version      0.1
// @description  在漫画浏览页面的左下角添加一个按钮，单击之后跳转到手机版的相应页面
// @author       Liu233w
// @match        http://manhua.dmzj.com/*
// @grant        none
// @license      BSD 3-Clause License
// ==/UserScript==

(function() {
    'use strict';

    function gotoMobile() {
        const l = window.location
        window.location = 'https://m.dmzj.com/view'+l.pathname.replace('.shtml', '.html')
    }

    const btn = document.createElement('button')
    btn.innerHTML = '切换到手机版'
    btn.onclick = gotoMobile

    $('#floatCode').prepend(btn)
})();