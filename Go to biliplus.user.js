// ==UserScript==
// @name         Go to biliplus
// @namespace    https://liu233w.github.io
// @version      0.1
// @description  在tucao.one的搜索页面的每个条目添加一个链接，一键跳转到对应的biliplus地址
// @author       Liu233w
// @match        https://www.tucao.one/index.php?m=search&*
// @icon         https://www.google.com/s2/favicons?domain=tucao.one
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     $('.list .info').each(function() {
         const href = $(this).find('a.blue').attr('href')
         const vid = href.match(/(h\d+)/)[0]
         $(this).append(`<a href="https://www.biliplus.com/play/${vid}/">BiliPlus</a>`)
     })
})();