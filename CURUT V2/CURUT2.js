// ==UserScript==
// @name         CURUT2
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/CURUT%20V2/CURUT2.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/CURUT%20V2/CURUT2.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==





var refresh = 10;


var namagroup1 = "SHIOKELINCI4D";
var Comment1 = "#shiokelinci4d*MOCHOK52*18*53";

var namagroup2 = "HIGH4D";
var Comment2 = "MOCHI92 = 26*40*92 #HIGH4D #TOGELHIGH4D";

var namagroup3 = "SNIPER NUSANTARA";
var Comment3 = "#VESPATOGEL (MOCHO19) 72*17*84";

var namagroup4 = "GAIB4D";
var Comment4 = "GAIB4D=MOCHOK36=71*13*96";

var namagroup5 = "JNETOTO";
var Comment5 = "#JNETOTO(MOSIOM19)*81*93*34";

var namagroup6 = "KiosToto";
var Comment6 = "KIOSTOTO=MROTO15=55*86*06";

var namagroup7 = "KHUSUS MACAU";
var Comment7 = "#ASEPTOGEL MOMER14 18*53*20";

var namagroup8 = "ANGKER";
var Comment8 = "ANGKER4D=MOMER14=71*13*96";

var namagroup9 = "KEITOGEL";
var Comment9 = "#keitogel = MONTIR36 = 81*93*34";

var namagroup10 = "GILA4D";
var Comment10 = "GILA4D=MOLET25=71*13*96";

var namagroup11 = "Tiktak";
var Comment11 = "#Tiktaktogel / MODAR17 / 11 , 39 , 85";

var namagroup12 = "BOCORAN PREDIKSI SDY";
var Comment12 = "#TOGELKUY MORAK16 26*40*92";

var namagroup13 = "PORTOGEL OFFICIAL";
var Comment13 = "#PORTOGEL (MOKONG71) : 03*68*05";

var namagroup14 = "AXISTOGEL OFFICIAL";
var Comment14 = "#BETTING MONTOK69: 03*68*05";

var namagroup15 = "TOTOAKURAT";
var Comment15 = "#TA*MORATUL19*11*39*85*";

var namagroup16 = "WAHANATOGEL";
var Comment16 = "#WAHANATOGEL(MONTOK69) : 03*68*05";




var d = new Date();
var hour = d.getHours();
var tm = await GM.getValue("time");

var id1 = await GM.getValue(1);
var id2 = await GM.getValue(2);
var id3 = await GM.getValue(3);
var id4 = await GM.getValue(4);
var id5 = await GM.getValue(5);
var id6 = await GM.getValue(6);
var id7 = await GM.getValue(7);
var id8 = await GM.getValue(8);
var id9 = await GM.getValue(9);
var id10 = await GM.getValue(10);
var id11 = await GM.getValue(11);
var id12 = await GM.getValue(12);
var id13 = await GM.getValue(13);
var id14 = await GM.getValue(14);
var id15 = await GM.getValue(15);
var id16 = await GM.getValue(16);
var id17 = await GM.getValue(17);

/*Keyword*/
var keyword1 ="𝗥𝗢𝗢𝗠";
var keyword2 ="𝗟𝗢𝗠𝗕𝗔";
var keyword3 ="lomba";
var keyword4 ="room";
var keyword5 ="ROOM";
var keyword6 ="LOMBA";
var keyword7 ="🏅";
var keyword8 ="tebak";
var keyword9 ="R.O.O.M";
var keyword10 ="roniotu";

/*Backlist Kata*/
var Backlist1 = "rekap";
var Backlist2 = "artikel";
var Backlist3 = "hasil";
var Backlist4 = "jam berapa";
var Backlist5 = "room lomba freebet";
var Backlist6 = "pemenang";
var Backlist7 = "bos";
var Backlist8 = "kapan";
var Backlist9 = "";
var cekpostingan = document.getElementsByClassName('native-text')[26].textContent.toLowerCase();
var ceknamagroup = document.getElementsByClassName('native-text')[7].textContent;
var waktupost = document.getElementsByClassName('native-text')[24].textContent;






setTimeout(function() {

    if (tm == "" || tm == undefined || tm == null) {
        GM.setValue("time", hour);
    }


    if ( hour > tm + 2 || hour < tm||document.URL.includes("google") == true){
        for (var kr = 1; kr < 18; kr++) {
            GM.setValue( kr,0);
        }
        GM.setValue("time", hour);

    }

    if (document.getElementsByClassName('native-text')[12].textContent == 'Bergabung grup') {
        document.getElementsByClassName('native-text')[12].click();
        window.location.reload();
        return;

    }
    if (document.getElementsByClassName('native-text')[2].textContent.includes("Postingan")) {
        window.close();

    }



    if (waktupost.includes( "Baru saja") ||waktupost.slice(0, 7) == "1 menit"||waktupost.slice(0, 7) == "2 menit"||waktupost.slice(0, 7) == "3 menit"||waktupost.slice(0, 7) == "4 menit"||waktupost.slice(0, 7) == "5 menit") {









        /*start*/
        if (id1 == "" || id1 == undefined || id1 == null ||id1 == "0") {
            if (ceknamagroup.includes(namagroup1) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr1 = 30; kr1 < 35; kr1++) {

                        if (document.getElementsByClassName('native-text')[kr1].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr1].click();
                        }

                    }

                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment1 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent1 = document.createEvent ('MouseEvents');
                    clickEvent1.initEvent ("mousedown", true, true);
                    clicksendcoment1.dispatchEvent (clickEvent1);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 1,1);
                    return;
                }
            }

        } else{
            window.close();
            location.href = "about:blank"
        }

        /*end*/









        /*start*/
        if (id2 == "" || id2 == undefined || id2 == null ||id2 == "0") {
            if (ceknamagroup.includes(namagroup2) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr2 = 30; kr2 < 35; kr2++) {

                        if (document.getElementsByClassName('native-text')[kr2].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr2].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment2 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent2 = document.createEvent ('MouseEvents');
                    clickEvent2.initEvent ("mousedown", true, true);
                    clicksendcoment2.dispatchEvent (clickEvent2);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 2,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/









        /*start*/
        if (id3 == "" || id3 == undefined || id3 == null ||id3 == "0") {
            if (ceknamagroup.includes(namagroup3) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr3 = 30; kr3 < 35; kr3++) {

                        if (document.getElementsByClassName('native-text')[kr3].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr3].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment3 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent3 = document.createEvent ('MouseEvents');
                    clickEvent3.initEvent ("mousedown", true, true);
                    clicksendcoment3.dispatchEvent (clickEvent3);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 3,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/









        /*start*/
        if (id4 == "" || id4 == undefined || id4 == null ||id4 == "0") {
            if (ceknamagroup.includes(namagroup4) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr4 = 30; kr4 < 35; kr4++) {

                        if (document.getElementsByClassName('native-text')[kr4].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr4].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment4 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent4 = document.createEvent ('MouseEvents');
                    clickEvent4.initEvent ("mousedown", true, true);
                    clicksendcoment4.dispatchEvent (clickEvent4);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 4,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/








        /*start*/
        if (id5 == "" || id5 == undefined || id5 == null ||id5 == "0") {
            if (ceknamagroup.includes(namagroup5) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr5 = 30; kr5 < 35; kr5++) {

                        if (document.getElementsByClassName('native-text')[kr5].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr5].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment5 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent5 = document.createEvent ('MouseEvents');
                    clickEvent5.initEvent ("mousedown", true, true);
                    clicksendcoment5.dispatchEvent (clickEvent5);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 5,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/









        /*start*/
        if (id6 == "" || id6 == undefined || id6 == null ||id6 == "0") {
            if (ceknamagroup.includes(namagroup6) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr6 = 30; kr6 < 35; kr6++) {

                        if (document.getElementsByClassName('native-text')[kr6].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr6].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment6 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent6 = document.createEvent ('MouseEvents');
                    clickEvent6.initEvent ("mousedown", true, true);
                    clicksendcoment6.dispatchEvent (clickEvent6);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 6,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/









        /*start*/
        if (id7 == "" || id7 == undefined || id7 == null ||id7 == "0") {
            if (ceknamagroup.includes(namagroup7) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr7 = 30; kr7 < 35; kr7++) {

                        if (document.getElementsByClassName('native-text')[kr7].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr7].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment7 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent7 = document.createEvent ('MouseEvents');
                    clickEvent7.initEvent ("mousedown", true, true);
                    clicksendcoment7.dispatchEvent (clickEvent7);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 7,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/








        /*start*/
        if (id8 == "" || id8 == undefined || id8 == null ||id8 == "0") {
            if (ceknamagroup.includes(namagroup8) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr8 = 30; kr8 < 35; kr8++) {

                        if (document.getElementsByClassName('native-text')[kr8].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr8].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment8 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent8 = document.createEvent ('MouseEvents');
                    clickEvent8.initEvent ("mousedown", true, true);
                    clicksendcoment8.dispatchEvent (clickEvent8);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 8,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/











        /*start*/
        if (id9 == "" || id9 == undefined || id9 == null ||id9 == "0") {
            if (ceknamagroup.includes(namagroup9) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr9 = 30; kr9 < 35; kr9++) {

                        if (document.getElementsByClassName('native-text')[kr9].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr9].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment9 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent9 = document.createEvent ('MouseEvents');
                    clickEvent9.initEvent ("mousedown", true, true);
                    clicksendcoment9.dispatchEvent (clickEvent9);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 9,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/









        /*start*/
        if (id10 == "" || id10 == undefined || id10 == null ||id10 == "0") {
            if (ceknamagroup.includes(namagroup10) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr10 = 30; kr10 < 35; kr10++) {

                        if (document.getElementsByClassName('native-text')[kr10].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr10].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment10 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent10 = document.createEvent ('MouseEvents');
                    clickEvent10.initEvent ("mousedown", true, true);
                    clicksendcoment10.dispatchEvent (clickEvent10);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 10,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/










        /*start*/
        if (id11 == "" || id11 == undefined || id11 == null ||id11 == "0") {
            if (ceknamagroup.includes(namagroup11) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr11 = 30; kr11 < 35; kr11++) {

                        if (document.getElementsByClassName('native-text')[kr11].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr11].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment11 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent11 = document.createEvent ('MouseEvents');
                    clickEvent11.initEvent ("mousedown", true, true);
                    clicksendcoment11.dispatchEvent (clickEvent11);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 11,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/









        /*start*/
        if (id12 == "" || id12 == undefined || id12 == null ||id12 == "0") {
            if (ceknamagroup.includes(namagroup12) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr12 = 30; kr12 < 35; kr12++) {

                        if (document.getElementsByClassName('native-text')[kr12].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr12].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment12 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent12 = document.createEvent ('MouseEvents');
                    clickEvent12.initEvent ("mousedown", true, true);
                    clicksendcoment12.dispatchEvent (clickEvent12);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 12,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/









        /*start*/
        if (id13 == "" || id13 == undefined || id13 == null ||id13 == "0") {
            if (ceknamagroup.includes(namagroup13) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr13 = 30; kr13 < 35; kr13++) {

                        if (document.getElementsByClassName('native-text')[kr13].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr13].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment13 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent13 = document.createEvent ('MouseEvents');
                    clickEvent13.initEvent ("mousedown", true, true);
                    clicksendcoment13.dispatchEvent (clickEvent13);
                    GM.setValue( 13,1);
                    /*Tekan TOMBOL SEND*/
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/










        /*start*/
        if (id14 == "" || id14 == undefined || id14 == null ||id14 == "0") {
            if (ceknamagroup.includes(namagroup14) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr14 = 30; kr14 < 35; kr14++) {

                        if (document.getElementsByClassName('native-text')[kr14].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr14].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment14 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent14 = document.createEvent ('MouseEvents');
                    clickEvent14.initEvent ("mousedown", true, true);
                    clicksendcoment14.dispatchEvent (clickEvent14);
                    GM.setValue( 14,1);
                    /*Tekan TOMBOL SEND*/
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/











        /*start*/
        if (id15 == "" || id15 == undefined || id15 == null ||id15 == "0") {
            if (ceknamagroup.includes(namagroup15) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr15 = 30; kr15 < 35; kr15++) {

                        if (document.getElementsByClassName('native-text')[kr15].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr15].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment15 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent15 = document.createEvent ('MouseEvents');
                    clickEvent15.initEvent ("mousedown", true, true);
                    clicksendcoment15.dispatchEvent (clickEvent15);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 15,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/











        /*start*/
        if (id16 == "" || id16 == undefined || id16 == null ||id16 == "0") {
            if (ceknamagroup.includes(namagroup16) === true) {
                if (cekpostingan.length < 30) {
                    window.location.reload();
                    return;
                }
                if (cekpostingan.includes("Backlist1")||cekpostingan.includes("Backlist2")||cekpostingan.includes("Backlist3")||cekpostingan.includes("Backlist4")||cekpostingan.includes("Backlist5")||cekpostingan.includes("Backlist6")||cekpostingan.includes("Backlist7")||cekpostingan.includes("Backlist8")||cekpostingan.includes("Backlist9")){
                    window.location.reload();
                    return;
                }
                if(cekpostingan.includes(keyword1)||cekpostingan.includes(keyword2)||cekpostingan.includes(keyword3)||cekpostingan.includes(keyword4)||cekpostingan.includes(keyword5)||cekpostingan.includes(keyword6)||cekpostingan.includes(keyword7)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword8)||cekpostingan.includes(keyword9)||cekpostingan.includes(keyword10)) {

                    /*click coment text box*/
                    for (var kr16 = 30; kr16 < 35; kr16++) {

                        if (document.getElementsByClassName('native-text')[kr16].textContent.includes("Tulis")) {
                            document.getElementsByClassName('native-text')[kr16].click();
                        }


                    }
                    /*isi Comment*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                    /*Tampilkan TOMBOL SEND*/
                    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                    /*Tekan TOMBOL SEND*/
                    var clicksendcoment16 = document.getElementsByClassName("textbox-submit-button")[0];
                    var clickEvent16 = document.createEvent ('MouseEvents');
                    clickEvent16.initEvent ("mousedown", true, true);
                    clicksendcoment16.dispatchEvent (clickEvent16);
                    /*Tekan TOMBOL SEND*/
                    GM.setValue( 16,1);
                    return;
                }
            }
        } else{
            window.close();
            location.href = "about:blank"
        }
        /*end*/











    }



    window.location.reload();





},refresh * 10)







