// ==UserScript==
// @name         Bilibili显示失效的收藏夹内容
// @namespace    https://liu233w.github.io
// @version      0.1
// @description  Bilibili显示失效的收藏夹内容
// @author       Liu233w
// @license      BSD 3-Clause License
// @match        https://space.bilibili.com/*
// @grant        none
// @downloadURL  https://github.com/Liu233w/userscripts/raw/master/Bilibili%E6%98%BE%E7%A4%BA%E5%A4%B1%E6%95%88%E7%9A%84%E6%94%B6%E8%97%8F%E5%A4%B9%E5%86%85%E5%AE%B9.user.js
// @updateURL    https://github.com/Liu233w/userscripts/raw/master/Bilibili%E6%98%BE%E7%A4%BA%E5%A4%B1%E6%95%88%E7%9A%84%E6%94%B6%E8%97%8F%E5%A4%B9%E5%86%85%E5%AE%B9.user.js
// ==/UserScript==

(function() {
  'use strict';

  setInterval(function() {
    document.querySelectorAll('li.small-item.disabled').forEach(item => {
      const title = item.querySelector('img').getAttribute('alt')
      item.querySelector('a.title').innerHTML = title
    })
  }, 1000)
})();
