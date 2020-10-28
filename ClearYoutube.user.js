// ==UserScript==
// @name         Clear Youtube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.thinbug.com/q/28046084
// @match        *://youtube*
// @match        youtube.com
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function main(){
        var obj = document.getElementById("primary-inner");
        var child=document.getElementById("player");
        //obj.removeChild("player");
        //obj.removeChild(child);
        //window.alert(obj.childNodes[1]);
        //await Promise(r => setTimeout(r, 2000));
        obj.removeChild(obj.childNodes[1]);
        //obj.innerHTML = "";//删除div内容

    }
    //main();
    document.ready(setTimeout(main,3000));


})();