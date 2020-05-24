// ==UserScript==
// @name         动漫之家跳转到手机版漫画页面
// @namespace    https://liu233w.com/dmzj-go-mobile
// @version      0.1
// @description  在漫画浏览页面的左下角添加一个按钮，单击之后跳转到手机版的相应页面
// @author       Liu233w
// @match        http://manhua.dmzj.com/*
// @grant        none
// @license      BSD 3-Clause License
// @downloadURL	 https://github.com/Liu233w/userscripts/raw/master/%E5%8A%A8%E6%BC%AB%E4%B9%8B%E5%AE%B6%E8%B7%B3%E8%BD%AC%E5%88%B0%E6%89%8B%E6%9C%BA%E7%89%88%E6%BC%AB%E7%94%BB%E9%A1%B5%E9%9D%A2.user.js
// @updateURL    https://github.com/Liu233w/userscripts/raw/master/%E5%8A%A8%E6%BC%AB%E4%B9%8B%E5%AE%B6%E8%B7%B3%E8%BD%AC%E5%88%B0%E6%89%8B%E6%9C%BA%E7%89%88%E6%BC%AB%E7%94%BB%E9%A1%B5%E9%9D%A2.user.js
// ==/UserScript==

(function () {
    'use strict';

    function gotoMobile() {
        const l = window.location
        window.location = 'https://m.dmzj.com/view' + l.pathname.replace('.shtml', '.html')
    }

    const btn = document.createElement('button')
    btn.innerHTML = '切换到手机版'
    btn.onclick = gotoMobile

    $('#floatCode').prepend(btn)
})();