// ==UserScript==
// @name         NEW CURUT3
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/CURUT%20V2/CURUT3.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/CURUT%20V2/CURUT3.js
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
var Comment1 = "#shiokelinci4d*ALDIANAS16*04*46";

var namagroup2 = "HIGH4D";
var Comment2 = "ALAKTRAS = 61*67*22 #HIGH4D #TOGELHIGH4D";

var namagroup3 = "PORTOGEL OFFICIAL";
var Comment3 = "#PORTOGEL (ALUMNI212) : 99*97*95";

var namagroup4 = "GAIB4D";
var Comment4 = "GAIB4D=ALFATAH16=28*21*15";

var namagroup5 = "KEITOGEL";
var Comment5 = "#keitogel = ALIMN26 = 42*16*50";

var namagroup6 = "KiosToto";
var Comment6 = "KIOSTOTO=ALKODAR13=52*65*12";

var namagroup7 = "KHUSUS MACAU";
var Comment7 = "#ASEPTOGEL ALAKADUR14 04*46*75";

var namagroup8 = "ANGKER";
var Comment8 = "ANGKER4D=ALAKADUR14=28*21*15";

var namagroup9 = "GILA4D";
var Comment9 = "GILA4D=ALKON26=28*21*15";

var namagroup10 = "WAHANATOGEL";
var Comment10 = "#WAHANATOGEL(ALMAR19) : 99*97*95";

var namagroup11 = "Tiktak";
var Comment11 = "#Tiktaktogel / ALASAN36 / 41 , 83 , 08";

var namagroup12 = "BOCORAN PREDIKSI SDY";
var Comment12 = "#TOGELKUY ALDRUN19 61*67*22";

var namagroup13 = "SNIPER NUSANTARA";
var Comment13 = "#VESPATOGEL (ALAHMBUH) 09*70*43";

var namagroup14 = "AXISTOGEL OFFICIAL";
var Comment14 = "#BETTING ALMAR19: 99*97*95";

var namagroup15 = "TOTOAKURAT";
var Comment15 = "#TA*ALAHAKBAR*41*83*08*";

var namagroup16 = "JNETOTO";
var Comment16 = "#JNETOTO(ALKUDIR19)*42*16*50";

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
var keyword = ["𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔", "𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔", "𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","lomba angker4d","room lomba","ROOM_LOMBA","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","room lomba betting"];


/*Backlist Kata*/
var Backlist = ["rekap", "artikel", "hasil","jam berapa","room lomba freebet","nanti","kapan","bos","mana"];



setInterval(function(){


    if (tm == "" || tm == undefined || tm == null) {
        GM.setValue("time", hour);
    }

    if ( hour > tm + 2 || hour < tm||document.URL.includes("google") ){

        for (var kr = 1; kr < 18; kr++) {
            GM.setValue( kr,0);

        }
        GM.setValue("time", hour);

    }
    'use strict';

    var ceknamagroup = document.getElementsByClassName('native-text')[6].textContent;
    var ceknamagroup1 = document.getElementsByClassName('native-text')[5].textContent;
    var ceknamagroup2 = document.getElementsByClassName('native-text')[7].textContent;
    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    var urutkan2 = document.querySelectorAll("[data-mcomponent='TextArea']");
    var waktupost = document.querySelectorAll("[class='native-text']");
    if (document.readyState === "complete") {
        for (var coke = 0; coke < urutkan2.length; coke++) {
            if (urutkan2[coke].textContent.includes("URUTKAN")) {
                urutkan2[coke].click()


            }
        }

    }
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





    if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true) {
        if (id1 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup2) == true||ceknamagroup1.includes(namagroup2) == true) {
        if (id2 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true) {
        if (id3 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup4) == true||ceknamagroup1.includes(namagroup4) == true) {
        if (id4 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup5) == true||ceknamagroup1.includes(namagroup5) == true) {
        if (id5 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup6) == true||ceknamagroup1.includes(namagroup6) == true) {
        if (id6 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup7) == true||ceknamagroup1.includes(namagroup7) == true) {
        if (id7 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup8) == true||ceknamagroup1.includes(namagroup8) == true) {
        if (id8 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup9) == true||ceknamagroup1.includes(namagroup9) == true) {
        if (id9 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup10) == true||ceknamagroup1.includes(namagroup10) == true) {
        if (id10 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup11) == true||ceknamagroup1.includes(namagroup11) == true) {
        if (id11 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup12) == true||ceknamagroup1.includes(namagroup12) == true) {
        if (id12 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup13) == true||ceknamagroup1.includes(namagroup13) == true) {
        if (id13 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup14) == true||ceknamagroup1.includes(namagroup14) == true) {
        if (id14 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup15) == true||ceknamagroup1.includes(namagroup15) == true) {
        if (id15 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }

    if (ceknamagroup.includes(namagroup16) == true||ceknamagroup1.includes(namagroup16) == true) {
        if (id16 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }



    var cekjam1 = document.getElementsByClassName('native-text')[20].textContent
    var cekjam2 = document.getElementsByClassName('native-text')[21].textContent
    var cekjam3 = document.getElementsByClassName('native-text')[22].textContent
    var cekjam4 = document.getElementsByClassName('native-text')[23].textContent
    var cekjam5 = document.getElementsByClassName('native-text')[24].textContent
    var cekjam6 = document.getElementsByClassName('native-text')[25].textContent
    var cekjam7 = document.getElementsByClassName('native-text')[26].textContent

    var cekcomment1 = document.getElementsByClassName('native-text')[22].textContent
    var cekcomment2 = document.getElementsByClassName('native-text')[22].textContent
    var cekcomment3 = document.getElementsByClassName('native-text')[23].textContent
    var cekcomment4 = document.getElementsByClassName('native-text')[24].textContent
    var cekcomment5 = document.getElementsByClassName('native-text')[25].textContent
    var cekcomment6 = document.getElementsByClassName('native-text')[26].textContent
    var cekcomment7 = document.getElementsByClassName('native-text')[27].textContent
    var cekcomment8 = document.getElementsByClassName('native-text')[28].textContent

    var valid = false;
    if (cekjam1.includes("Baru saja")||cekjam1.slice(0, 7) == "1 menit"||cekjam2.includes("Baru saja")||cekjam2.slice(0, 7) == "1 menit"||cekjam3.includes("Baru saja")||cekjam3.slice(0, 7) == "1 menit"||cekjam4.includes("Baru saja")||cekjam4.slice(0, 7) == "1 menit"||cekjam5.includes("Baru saja")||cekjam5.slice(0, 7) == "1 menit"||cekjam6.includes("Baru saja")||cekjam6.slice(0, 7) == "1 menit"||cekjam7.includes("Baru saja")||cekjam7.slice(0, 7) == "1 menit") {
        /*Jika Waktu Di TEMUKAN */

        for (var j in keyword){
            if (cekcomment1.includes(keyword[j])||cekcomment2.includes(keyword[j])||cekcomment3.includes(keyword[j])||cekcomment4.includes(keyword[j])||cekcomment5.includes(keyword[j])||cekcomment6.includes(keyword[j])||cekcomment7.includes(keyword[j])||cekcomment8.includes(keyword[j])){
                /*Jika Keyword Di TEMUKAN */
                valid = true;
                break;
            }
        }

        for (var h in Backlist){
            if (cekcomment1.includes(Backlist[h])||cekcomment2.includes(Backlist[h])||cekcomment3.includes(Backlist[h])||cekcomment4.includes(Backlist[h])||cekcomment5.includes(Backlist[h])||cekcomment6.includes(Backlist[h])||cekcomment7.includes(Backlist[h])||cekcomment8.includes(Backlist[h])){
                /*Jika backlist Di TEMUKAN */
                valid = false;
                break;
            }
        }

        if(valid == true) {
            /*Jika Keyword Di TEMUKAN */
            for (var kr = 25; kr < 33; kr++){
                /*Cari textbox komentar */
                if(waktupost[kr].textContent.includes("Tulis komentar")) {
                    /*buka koment box */
                    valid = true;
                    waktupost[kr].click();
                    break;

                }
            }

        }

        /*Komentar*/
        if(valid == true) {
            if (id1 == "" || id1 == undefined || id1 == null ||id1 == "0") {
                if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true||ceknamagroup2.includes(namagroup1) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                    clicksend();
                    clearInterval()
                    GM.setValue( 1,1);
                    valid = false;
                    alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id2 == "" || id2 == undefined || id2 == null ||id2 == "0") {
                if (ceknamagroup.includes(namagroup2) == true||ceknamagroup1.includes(namagroup2) == true||ceknamagroup2.includes(namagroup2) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                    clicksend();
                    clearInterval()
                    GM.setValue( 2,1);
                    valid = false;
                    alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id3 == "" || id3 == undefined || id3 == null ||id3 == "0") {
                if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true||ceknamagroup2.includes(namagroup3) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                    clicksend();
                    clearInterval()
                    GM.setValue(3,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id4 == "" || id4 == undefined || id4 == null ||id4 == "0") {
                if (ceknamagroup.includes(namagroup4) == true||ceknamagroup1.includes(namagroup4) == true||ceknamagroup2.includes(namagroup4) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                    clicksend();
                    clearInterval()
                    GM.setValue( 4,1);
                    valid = false;
                    alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id5 == "" || id5 == undefined || id5 == null ||id5 == "0") {
                if (ceknamagroup.includes(namagroup5) == true||ceknamagroup1.includes(namagroup5) == true||ceknamagroup2.includes(namagroup5) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                    clicksend();
                    clearInterval()
                    GM.setValue( 5,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id6 == "" || id6 == undefined || id6 == null ||id6 == "0") {
                if (ceknamagroup.includes(namagroup6) == true||ceknamagroup1.includes(namagroup6) == true||ceknamagroup2.includes(namagroup6) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                    clicksend();
                    clearInterval()
                    GM.setValue( 6,1);
                    valid = false;
                    alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id7 == "" || id7 == undefined || id7 == null ||id7 == "0") {
                if (ceknamagroup.includes(namagroup7) == true||ceknamagroup1.includes(namagroup7) == true||ceknamagroup2.includes(namagroup7) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                    clicksend();
                    clearInterval()
                    GM.setValue( 7,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id8 == "" || id8 == undefined || id8 == null ||id8 == "0") {
                if (ceknamagroup.includes(namagroup8) == true||ceknamagroup1.includes(namagroup8) == true||ceknamagroup2.includes(namagroup8) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                    clicksend();
                    clearInterval()
                    GM.setValue( 8,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id9 == "" || id9 == undefined || id9 == null ||id9 == "0") {
                if (ceknamagroup.includes(namagroup9) == true||ceknamagroup1.includes(namagroup9) == true||ceknamagroup2.includes(namagroup9) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                    clicksend();
                    clearInterval()
                    GM.setValue( 9,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id10 == "" || id10 == undefined || id10 == null ||id10 == "0") {
                if (ceknamagroup.includes(namagroup10) == true||ceknamagroup1.includes(namagroup10) == true||ceknamagroup2.includes(namagroup10) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                    clicksend();
                    clearInterval()
                    GM.setValue( 10,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id11 == "" || id11 == undefined || id11 == null ||id11 == "0") {
                if (ceknamagroup.includes(namagroup11) == true||ceknamagroup1.includes(namagroup11) == true||ceknamagroup2.includes(namagroup11) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                    clicksend();
                    clearInterval()
                    GM.setValue( 11,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id12 == "" || id12 == undefined || id12 == null ||id12 == "0") {
                if (ceknamagroup.includes(namagroup12) == true||ceknamagroup1.includes(namagroup12) == true||ceknamagroup2.includes(namagroup12) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                    clicksend();
                    clearInterval()
                    GM.setValue( 12,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id13 == "" || id13 == undefined || id13 == null ||id13 == "0") {
                if (ceknamagroup.includes(namagroup13) == true||ceknamagroup1.includes(namagroup13) == true||ceknamagroup2.includes(namagroup13) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                    clicksend();
                    clearInterval()
                    GM.setValue( 13,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id14 == "" || id14 == undefined || id14 == null ||id14 == "0") {
                if (ceknamagroup.includes(namagroup14) == true||ceknamagroup1.includes(namagroup14) == true||ceknamagroup2.includes(namagroup14) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                    clicksend();
                    clearInterval()
                    GM.setValue( 14,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id15 == "" || id15 == undefined || id15 == null ||id15 == "0") {
                if (ceknamagroup.includes(namagroup15) == true||ceknamagroup1.includes(namagroup15) == true||ceknamagroup2.includes(namagroup15) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                    clicksend();
                    clearInterval()
                    GM.setValue( 15,1);
                    valid = false;
                    alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id16 == "" || id16 == undefined || id16 == null ||id16 == "0") {
                if (ceknamagroup.includes(namagroup16) == true||ceknamagroup1.includes(namagroup16) == true||ceknamagroup2.includes(namagroup16) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                    clicksend();
                    clearInterval()
                    GM.setValue( 16,1);
                    valid = false;
                     alert("done")
                    location.href = "about:blank"
                    window.close()

                }
            }
        }
        /*End*/
    }






},refresh * 10)





































function clicksend() {
    /*Tampilkan TOMBOL SEND*/
    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
    /*Tekan TOMBOL SEND*/
    var clicksendcoment = document.getElementsByClassName("textbox-submit-button")[0];
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent ("mousedown", true, true);
    clicksendcoment.dispatchEvent (clickEvent);
    /*Tekan TOMBOL SEND*/
}

