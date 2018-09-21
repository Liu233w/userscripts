// ==UserScript==
// @name         Bilibili显示失效的收藏夹内容
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bilibili显示失效的收藏夹内容
// @author       Liu233w
// @match        https://space.bilibili.com/*
// @grant        none
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