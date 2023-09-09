// ==UserScript==
// @name         AUTO  JOIN
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/AUTOJOIN/AUTOJOIN.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/AUTOJOIN/AUTOJOIN.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==

var refresh = 90;
var cekjoin1 = document.getElementsByClassName('native-text')[10]
var cekjoin2 = document.getElementsByClassName('native-text')[11]
var cekjoin3 = document.getElementsByClassName('native-text')[12]
var cekjoin4 = document.getElementsByClassName('native-text')[13]
var cekjoin5 = document.getElementsByClassName('native-text')[14]
setInterval(function(){
    'use strict';




    if(document.readyState == "complete"){
        if(cekjoin1.textContent.includes("Bergabung grup")==true) {
            document.getElementsByClassName('native-text')[10].click();
            window.location.reload()
        }
        if(cekjoin2.textContent.includes("Bergabung grup")==true) {
            document.getElementsByClassName('native-text')[11].click();
            window.location.reload()
        }
        if(cekjoin3.textContent.includes("Bergabung grup")==true) {
            document.getElementsByClassName('native-text')[12].click();
            window.location.reload()
        }
        if(cekjoin4.textContent.includes("Bergabung grup")==true) {
            document.getElementsByClassName('native-text')[13].click();
            window.location.reload()
        }
        if(cekjoin5.textContent.includes("Bergabung grup")==true) {
            document.getElementsByClassName('native-text')[14].click();
            window.location.reload()
        }


    }
      if(document.URL.includes('search')){
        if(document.getElementsByClassName('native-text').length >=17 ) {
        document.getElementsByClassName('native-text')[17].click()
        }
        document.querySelectorAll("[value='Kunjungi']")[0].click()
    }


    // Your code here...
},refresh * 10)
