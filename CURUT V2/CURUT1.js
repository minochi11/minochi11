// ==UserScript==
// @name         CURUT1
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/CURUT%20V2/CURUT1.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/CURUT%20V2/CURUT1.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==



var refresh = 100;





var namagroup1 = "SHIOKELINCI4D";
var Comment1 = "#shiokelinci4d*QOMAR26*37*94";

var namagroup2 = "HIGH4D";
var Comment2 = "QOMAR27 = 30*31*98 #HIGH4D #TOGELHIGH4D";

var namagroup3 = "GILA4D";
var Comment3 = "GILA4D=QOMA123=02*47*78";

var namagroup4 = "GAIB4D";
var Comment4 = "GAIB4D=QOMAR29=02*47*78";

var namagroup5 = "KEITOGEL";
var Comment5 = "#keitogel = QOMAR26 = 48*74*27";

var namagroup6 = "KiosToto";
var Comment6 = "KIOSTOTO=QUMU17=76*59*38";

var namagroup7 = "KHUSUS MACAU";
var Comment7 = "#ASEPTOGEL QOMIR23 37*94*79";

var namagroup8 = "ANGKER";
var Comment8 = "ANGKER4D=QOMIR23=02*47*78";

var namagroup9 = "SNIPER NUSANTARA";
var Comment9 = "#VESPATOGEL (QUMUR19) 36*87*10";

var namagroup10 = "WAHANATOGEL";
var Comment10 = "#WAHANATOGEL(QOQOM52) : 60*49*73";

var namagroup11 = "Tiktak";
var Comment11 = "#Tiktaktogel / QOMAR28 / 80 , 58 , 45";

var namagroup12 = "BOCORAN PREDIKSI SDY";
var Comment12 = "#TOGELKUY QANAS52 30*31*98";

var namagroup13 = "PORTOGEL OFFICIAL";
var Comment13 = "#PORTOGEL (QOECK62) : 60*49*73";

var namagroup14 = "AXISTOGEL OFFICIAL";
var Comment14 = "#BETTING QOQOM52: 60*49*73";

var namagroup15 = "TOTOAKURAT";
var Comment15 = "#TA*QOMINTO15*80*58*45*";

var namagroup16 = "JNETOTO";
var Comment16 = "#JNETOTO(QOMARUT14)*48*74*27";




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
var keyword10 ="info";

/*Backlist Kata*/
var Backlist1 = "rekap";
var Backlist2 = "artikel";
var Backlist3 = "hasil";
var Backlist4 = "jam berapa";
var Backlist5 = "room lomba freebet";
var Backlist6 = "pemenang";
var Backlist7 = "dsa";
var Backlist8 = "kapan";
var Backlist9 = "qwesdaw";




setInterval(function(){





    'use strict';
    if (tm == "" || tm == undefined || tm == null) {
        GM.setValue("time", hour);
    }

    if ( hour > tm + 2 || hour < tm||document.URL.includes("google") ){
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
        location.href = "about:blank"
        window.close()

    }
    if (document.getElementsByClassName('fixed-container')[0].textContent.includes("Postingan")) {

        location.href = "about:blank"
        window.close()

    }



    var ceknamagroup = document.getElementsByClassName('native-text')[7].textContent;
    var cekpostingan
    var waktupost = document.querySelectorAll("[class='native-text']");


    if (ceknamagroup.includes(namagroup1) == true) {
        if (id1 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup2) == true) {
        if (id2 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup3) == true) {
        if (id3 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup4) == true) {
        if (id4 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup5) == true) {
        if (id5 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup6) == true) {
        if (id6 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup7) == true) {
        if (id7 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup8) == true) {
        if (id8 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup9) == true) {
        if (id9 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup10) == true) {
        if (id10 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup11) == true) {
        if (id11 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup12) == true) {
        if (id12 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup13) == true) {
        if (id13 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup14) == true) {
        if (id14 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup15) == true) {
        if (id15 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup16) == true) {
        if (id16 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    outerloops:










    for (var kr1 = 5; kr1 < waktupost.length; kr1++) {


        if (waktupost[kr1].textContent.includes( "Baru saja") ||waktupost[kr1].textContent.slice(0, 7) == "1 menit"||waktupost[kr1].textContent.slice(0, 7) == "2 menit"||waktupost[kr1].textContent.slice(0, 7) == "3 menit"||waktupost[kr1].textContent.slice(0, 7) == "4 menit"||waktupost[kr1].textContent.slice(0, 7) == "19 jam") {

            for (var kro = kr1; kro < waktupost.length; kro++) {
                var chen = waktupost[kro].textContent.toLowerCase()
                if (chen.includes(Backlist1)||chen.includes(Backlist2)||chen.includes(Backlist3)||chen.includes(Backlist4)||chen.includes(Backlist5)||chen.includes(Backlist6)||chen.includes(Backlist7)||chen.includes(Backlist8)||chen.includes(Backlist9)){
                    alert("ada BL")
                    window.location.reload();
                } else {

                    if(chen.includes(keyword1)||chen.includes(keyword2)||chen.includes(keyword3)||chen.includes(keyword4)||chen.includes(keyword5)||chen.includes(keyword6)||chen.includes(keyword7)||chen.includes(keyword8)||chen.includes(keyword8)||chen.includes(keyword9)||chen.includes(keyword10)) {



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup1) == true) {

                            /*cari textbox comment*/
                            for (var c1 = kro; c1 < waktupost.length; c1++) {
                                if(waktupost[c1].textContent.includes("Tulis komentar")) {
                                    if (id1 == "" || id1 == undefined || id1 == null ||id1 == "0") {

                                        waktupost[c1].click();
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
                                        break

                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup2) == true) {

                            /*cari textbox comment*/
                            for (var c2 = kro; c2 < waktupost.length; c2++) {
                                if(waktupost[c2].textContent.includes("Tulis komentar")) {
                                    if (id2 == "" || id2 == undefined || id2 == null ||id2 == "0") {

                                        waktupost[c2].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup3) == true) {

                            /*cari textbox comment*/
                            for (var c3 = kro; c3 < waktupost.length; c3++) {
                                if(waktupost[c3].textContent.includes("Tulis komentar")) {
                                    if (id3 == "" || id3 == undefined || id3 == null ||id3 == "0") {

                                        waktupost[c3].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/


                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup4) == true) {

                            /*cari textbox comment*/
                            for (var c4 = kro; c4 < waktupost.length; c4++) {
                                if(waktupost[c4].textContent.includes("Tulis komentar")) {
                                    if (id4 == "" || id4 == undefined || id4 == null ||id4 == "0") {

                                        waktupost[c4].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup5) == true) {

                            /*cari textbox comment*/
                            for (var c5 = kro; c5 < waktupost.length; c5++) {
                                if(waktupost[c5].textContent.includes("Tulis komentar")) {
                                    if (id5 == "" || id5 == undefined || id5 == null ||id5 == "0") {

                                        waktupost[c5].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/





                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup6) == true) {

                            /*cari textbox comment*/
                            for (var c6 = kro; c6 < waktupost.length; c6++) {
                                if(waktupost[c6].textContent.includes("Tulis komentar")) {
                                    if (id6 == "" || id6 == undefined || id6 == null ||id6 == "0") {

                                        waktupost[c6].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/




                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup7) == true) {

                            /*cari textbox comment*/
                            for (var c7 = kro; c7 < waktupost.length; c7++) {
                                if(waktupost[c7].textContent.includes("Tulis komentar")) {
                                    if (id7 == "" || id7 == undefined || id7 == null ||id7 == "0") {

                                        waktupost[c7].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup8) == true) {

                            /*cari textbox comment*/
                            for (var c8 = kro; c8 < waktupost.length; c8++) {
                                if(waktupost[c8].textContent.includes("Tulis komentar")) {
                                    if (id8 == "" || id8 == undefined || id8 == null ||id8 == "0") {

                                        waktupost[c8].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup9) == true) {

                            /*cari textbox comment*/
                            for (var c9 = kro; c9 < waktupost.length; c9++) {
                                if(waktupost[c9].textContent.includes("Tulis komentar")) {
                                    if (id9 == "" || id9 == undefined || id9 == null ||id9 == "0") {

                                        waktupost[c9].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup10) == true) {

                            /*cari textbox comment*/
                            for (var c10 = kro; c10 < waktupost.length; c10++) {
                                if(waktupost[c10].textContent.includes("Tulis komentar")) {
                                    if (id10 == "" || id10 == undefined || id10 == null ||id10 == "0") {

                                        waktupost[c10].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/




                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup11) == true) {

                            /*cari textbox comment*/
                            for (var c11 = kro; c11 < waktupost.length; c11++) {
                                if(waktupost[c11].textContent.includes("Tulis komentar")) {
                                    if (id11 == "" || id11 == undefined || id11 == null ||id11 == "0") {

                                        waktupost[c11].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/


                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup12) == true) {

                            /*cari textbox comment*/
                            for (var c12 = kro; c12 < waktupost.length; c12++) {
                                if(waktupost[c12].textContent.includes("Tulis komentar")) {
                                    if (id12 == "" || id12 == undefined || id12 == null ||id12 == "0") {

                                        waktupost[c12].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup13) == true) {

                            /*cari textbox comment*/
                            for (var c13 = kro; c13 < waktupost.length; c13++) {
                                if(waktupost[c13].textContent.includes("Tulis komentar")) {
                                    if (id13 == "" || id13 == undefined || id13 == null ||id13 == "0") {

                                        waktupost[c13].click();
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                                        /*Tampilkan TOMBOL SEND*/
                                        document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                                        /*Tekan TOMBOL SEND*/
                                        var clicksendcoment13 = document.getElementsByClassName("textbox-submit-button")[0];
                                        var clickEvent13 = document.createEvent ('MouseEvents');
                                        clickEvent13.initEvent ("mousedown", true, true);
                                        clicksendcoment13.dispatchEvent (clickEvent13);
                                        /*Tekan TOMBOL SEND*/
                                        GM.setValue( 13,1);
                                        return;
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/


                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup14) == true) {

                            /*cari textbox comment*/
                            for (var c14 = kro; c14 < waktupost.length; c14++) {
                                if(waktupost[c14].textContent.includes("Tulis komentar")) {
                                    if (id14 == "" || id14 == undefined || id14 == null ||id14 == "0") {

                                        waktupost[c14].click();
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                                        /*Tampilkan TOMBOL SEND*/
                                        document.getElementsByClassName("textbox-submit-button")[0].style.display=""
                                        /*Tekan TOMBOL SEND*/
                                        var clicksendcoment14 = document.getElementsByClassName("textbox-submit-button")[0];
                                        var clickEvent14 = document.createEvent ('MouseEvents');
                                        clickEvent14.initEvent ("mousedown", true, true);
                                        clicksendcoment14.dispatchEvent (clickEvent14);
                                        /*Tekan TOMBOL SEND*/
                                        GM.setValue( 14,1);
                                        return;
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/



                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup15) == true) {

                            /*cari textbox comment*/
                            for (var c15 = kro; c15 < waktupost.length; c15++) {
                                if(waktupost[c15].textContent.includes("Tulis komentar")) {
                                    if (id15 == "" || id15 == undefined || id15 == null ||id15 == "0") {

                                        waktupost[c15].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/


                        /*start Coment*/
                        if (ceknamagroup.includes(namagroup16) == true) {

                            /*cari textbox comment*/
                            for (var c16 = kro; c16 < waktupost.length; c16++) {
                                if(waktupost[c16].textContent.includes("Tulis komentar")) {
                                    if (id16 == "" || id16 == undefined || id16 == null ||id16 == "0") {

                                        waktupost[c16].click();
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
                                        break 
                                    } else{
                                        location.href = "about:blank"
                                        window.close();
                                    }



                                }


                            }
                            break outerloops
                        }
                        /*end Comment*/









                    }

                }

            }


        }


    }

    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    if (document.readyState === "complete") {
        for (var cok = 0; cok < urutkan.length; cok++) {
            if(urutkan[cok].textContent.includes("URUTKAN")) {
                urutkan[cok].click()

            }
        }

    }


    if (document.readyState === "complete") {
        for (var coki = 0; coki < waktupost.length; coki++) {
            if(waktupost[coki].textContent.includes("Postingan baru")) {
                waktupost[coki].click()

            }
        }

    }



},refresh * 10)




