// ==UserScript==
// @name         NANI1
// @namespace    http://tampermonkey.net/
// @version      3.5
// @description  try to take over the world!
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==


var refresh = 90;




var namagroup1 = 'SHIOKELINCI4D';
var Comment1 = '#shiokelinci4d*SOFASOFI*27*51';

var namagroup2 = 'VELBET4D';
var Comment2 = '{SOMPLAK123} = #VELBET4D = 15*25*67';

var namagroup3 = 'TiktakTogel';
var Comment3 = '#Tiktaktogel / SOLOYO12 / 48 , 94 , 53';

var namagroup4 = 'GAIB4D';
var Comment4 = 'GAIB4D=SOKOR90=95*75*58';

var namagroup5 = 'KEITOGEL';
var Comment5 = '#keitogel = SOLOMO38 = 15*25*67';

var namagroup6 = 'KiosToto';
var Comment6 = 'KIOSTOTO=SOLALI14=54*42*82';

var namagroup7 = 'KHUSUS MACAU';
var Comment7 = '#ASEPTOGEL SOLONTO12 54*42*82';

var namagroup8 = 'ANGKER';
var Comment8 = 'ANGKER4D=SONDOL78=72*52*12';

var namagroup9 = 'GILA4D';
var Comment9 = 'GILA4D=SOMEROT2=72*52*12';

var namagroup10 = 'JNETOTO';
var Comment10 = '#JNETOTO(SOLOLO88)*17*11*22';

var namagroup11 = 'TOTOAKURAT';
var Comment11 = '#TA*SOLETI72*72*52*12*';

var namagroup12 = 'BOCORAN PREDIKSI SDY';
var Comment12 = '#TOGELKUY SOLANAS36 17*11*22';

var namagroup13 = 'TOYIBSLOT';
var Comment13 = '#TOYIBSLOT ( SOLLOL87 ) : 48*94*53';

var namagroup14 = 'DENTOTO';
var Comment14 = '#DENTOTO 95*75*58 ( SOLES78 )';

var namagroup15 = 'SNIPER';
var Comment15 = '#VESPATOGEL (SOLES78)  26*85*35';

var namagroup16 = '123213213';
var Comment16 = '123123';








/*Keyword*/
var keyword = ["ROOM", "𝗥𝗢𝗢𝗠", "LOMBA","𝗟𝗢𝗠𝗕𝗔","BEBASIP","BEBAS IP","𝐋𝐎𝐌𝐁𝐀","ROOM_LOMBA","█","█"];

/*Backlist Kata*/
var Backlist = ["REKAP", "rekap", "hasil","HASIL","ROOM LOMBA FREEBET","nanti","kapan","Rekap","Hasil"];




/*Waktu*/
var jam1 = "Baru saja"
var jam2 = "1 menit"
var jam3 = "2 menit"
var jam4 = "3 menit"
var jam5 = "4 menit"
var jam6 = "5 menit"
var jam7 = "6 menit"
var jam8 = "7 menit"
var jam9 = "8 menit"

var jam = [jam1,jam2,jam3,jam4,jam5,jam6,jam7,jam8,jam9];

setInterval(function(){


    'use strict';
    GM.setValue("JAM", 0);
GM.setValue("KEYWORD", 0);
GM.setValue("BACKLIST", 0);
GM.setValue("CLICKCOMMENT", 0);
GM.setValue("DONE", 0);

    var ceknamagroup = document.getElementsByClassName('native-text')[4].textContent.toLowerCase();
    var ceknamagroup1 = document.getElementsByClassName('native-text')[5].textContent.toLowerCase();
    var ceknamagroup2 = document.getElementsByClassName('native-text')[6].textContent.toLowerCase();
    var ceknamagroup3 = document.getElementsByClassName('native-text')[7].textContent.toLowerCase();
    var ceknamagroup4 = document.getElementsByClassName('native-text')[8].textContent.toLowerCase();
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
            if(waktupost[coki].textContent.includes("Aktivitas")) {
                waktupost[coki].click()

            }
        }

    }



    var cekjam1 = document.getElementsByClassName('native-text')[20].textContent
    var cekjam2 = document.getElementsByClassName('native-text')[21].textContent
    var cekjam3 = document.getElementsByClassName('native-text')[22].textContent
    var cekjam4 = document.getElementsByClassName('native-text')[23].textContent
    var cekjam5 = document.getElementsByClassName('native-text')[24].textContent
    var cekjam6 = document.getElementsByClassName('native-text')[25].textContent
    var cekjam7 = document.getElementsByClassName('native-text')[26].textContent
    var cekjam8 = document.getElementsByClassName('native-text')[27].textContent
    var cekjam9 = document.getElementsByClassName('native-text')[28].textContent

    var cekcomment1 = document.getElementsByClassName('native-text')[20].textContent;
    var cekcomment2 = document.getElementsByClassName('native-text')[21].textContent;
    var cekcomment3 = document.getElementsByClassName('native-text')[22].textContent;
    var cekcomment4 = document.getElementsByClassName('native-text')[23].textContent;
    var cekcomment5 = document.getElementsByClassName('native-text')[24].textContent;
    var cekcomment6 = document.getElementsByClassName('native-text')[25].textContent;
    var cekcomment7 = document.getElementsByClassName('native-text')[26].textContent;
    var cekcomment8 = document.getElementsByClassName('native-text')[27].textContent;
    var cekcomment9 = document.getElementsByClassName('native-text')[28].textContent;
    var cekcomment10 = document.getElementsByClassName('native-text')[29].textContent;
    var cekcomment11= document.getElementsByClassName('native-text')[30].textContent;
    var cekcomment12= document.getElementsByClassName('native-text')[31].textContent;

    var validcom = false;
    var valid = false;
    var minimumtxt = 30;

    if (cekjam1.includes("Baru saja")||cekjam(cekjam1,jam) == 1||cekjam2.includes("Baru saja")||cekjam(cekjam2,jam) == 1||cekjam3.includes("Baru saja")||cekjam(cekjam3,jam) == 1||cekjam4.includes("Baru saja")||cekjam(cekjam4,jam) == 1||cekjam5.includes("Baru saja")||cekjam(cekjam5,jam) == 1||cekjam6.includes("Baru saja")||cekjam(cekjam6,jam) == 1||cekjam7.includes("Baru saja")||cekjam(cekjam7,jam) == 1||cekjam8.includes("Baru saja")||cekjam(cekjam8,jam) == 1||cekjam9.includes("Baru saja")||cekjam(cekjam9,jam) == 1) {
        /*Jika Waktu Di TEMUKAN */
        GM.setValue("JAM",1);
        for (var j in keyword){
            if (cekcomment1.includes(keyword[j])||cekcomment2.includes(keyword[j])||cekcomment3.includes(keyword[j])||cekcomment4.includes(keyword[j])||cekcomment5.includes(keyword[j])||cekcomment6.includes(keyword[j])||cekcomment7.includes(keyword[j])||cekcomment8.includes(keyword[j])||cekcomment9.includes(keyword[j])||cekcomment10.includes(keyword[j])||cekcomment11.includes(keyword[j])||cekcomment12.includes(keyword[j])){
                /*Jika Keyword Di TEMUKAN */
                validcom = true;
                GM.setValue("KEYWORD", 1);
                break;
            }
        }

        for (var h in Backlist){
            if (cekcomment1.includes(Backlist[h])||cekcomment2.includes(Backlist[h])||cekcomment3.includes(Backlist[h])||cekcomment4.includes(Backlist[h])||cekcomment5.includes(Backlist[h])||cekcomment6.includes(Backlist[h])||cekcomment7.includes(Backlist[h])||cekcomment8.includes(Backlist[h])||cekcomment9.includes(Backlist[h])||cekcomment10.includes(Backlist[h])||cekcomment11.includes(Backlist[h])||cekcomment12.includes(Backlist[h])){
                /*Jika backlist Di TEMUKAN */
                validcom = false;
                GM.setValue("BACKLIST", 1);
                break;
            }
        }
        if(validcom==true){
            if(cekcomment1.length >= minimumtxt||cekcomment2.length >= minimumtxt||cekcomment3.length >= minimumtxt||cekcomment4.length >= minimumtxt||cekcomment5.length >= minimumtxt||cekcomment6.length >= minimumtxt||cekcomment7.length >= minimumtxt||cekcomment8.length >= minimumtxt||cekcomment9.length >= minimumtxt||cekcomment10.length >= minimumtxt||cekcomment11.length >= minimumtxt||cekcomment12.length >= minimumtxt){
                valid=true
            }
        }

        if(valid == true) {
            /*Jika Keyword Di TEMUKAN */
            for (var kr = 23; kr < 34; kr++){
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

            if (ceknamagroup.includes(namagroup1.toLowerCase()) == true||ceknamagroup1.includes(namagroup1.toLowerCase()) == true||ceknamagroup2.includes(namagroup1.toLowerCase()) == true||ceknamagroup3.includes(namagroup1.toLowerCase()) == true||ceknamagroup4.includes(namagroup1.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                clicksend();
                clearInterval()
                GM.setValue( 1,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup2.toLowerCase()) == true||ceknamagroup1.includes(namagroup2.toLowerCase()) == true||ceknamagroup2.includes(namagroup2.toLowerCase()) == true||ceknamagroup3.includes(namagroup2.toLowerCase()) == true||ceknamagroup4.includes(namagroup2.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                clicksend();
                clearInterval()
                GM.setValue( 2,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup3.toLowerCase()) == true||ceknamagroup1.includes(namagroup3.toLowerCase()) == true||ceknamagroup2.includes(namagroup3.toLowerCase()) == true||ceknamagroup3.includes(namagroup3.toLowerCase()) == true||ceknamagroup4.includes(namagroup3.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                clicksend();
                clearInterval()
                GM.setValue(3,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup4.toLowerCase()) == true||ceknamagroup1.includes(namagroup4.toLowerCase()) == true||ceknamagroup2.includes(namagroup4.toLowerCase()) == true||ceknamagroup3.includes(namagroup4.toLowerCase()) == true||ceknamagroup4.includes(namagroup4.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                clicksend();
                clearInterval()
                GM.setValue( 4,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup5.toLowerCase()) == true||ceknamagroup1.includes(namagroup5.toLowerCase()) == true||ceknamagroup2.includes(namagroup5.toLowerCase()) == true||ceknamagroup3.includes(namagroup5.toLowerCase()) == true||ceknamagroup4.includes(namagroup5.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                clicksend();
                clearInterval()
                GM.setValue( 5,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup6.toLowerCase()) == true||ceknamagroup1.includes(namagroup6.toLowerCase()) == true||ceknamagroup2.includes(namagroup6.toLowerCase()) == true||ceknamagroup3.includes(namagroup6.toLowerCase()) == true||ceknamagroup4.includes(namagroup6.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                clicksend();
                clearInterval()
                GM.setValue( 6,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup7.toLowerCase()) == true||ceknamagroup1.includes(namagroup7.toLowerCase()) == true||ceknamagroup2.includes(namagroup7.toLowerCase()) == true||ceknamagroup3.includes(namagroup7.toLowerCase()) == true||ceknamagroup4.includes(namagroup7.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                clicksend();
                clearInterval()
                GM.setValue( 7,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup8.toLowerCase()) == true||ceknamagroup1.includes(namagroup8.toLowerCase()) == true||ceknamagroup2.includes(namagroup8.toLowerCase()) == true||ceknamagroup3.includes(namagroup8.toLowerCase()) == true||ceknamagroup4.includes(namagroup8.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                clicksend();
                clearInterval()
                GM.setValue( 8,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

             if (ceknamagroup.includes(namagroup9.toLowerCase()) == true||ceknamagroup1.includes(namagroup9.toLowerCase()) == true||ceknamagroup2.includes(namagroup9.toLowerCase()) == true||ceknamagroup3.includes(namagroup9.toLowerCase()) == true||ceknamagroup4.includes(namagroup9.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                clicksend();
                clearInterval()
                GM.setValue( 9,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup10.toLowerCase()) == true||ceknamagroup1.includes(namagroup10.toLowerCase()) == true||ceknamagroup2.includes(namagroup10.toLowerCase()) == true||ceknamagroup3.includes(namagroup10.toLowerCase()) == true||ceknamagroup4.includes(namagroup10.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                clicksend();
                clearInterval()
                GM.setValue( 10,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup11.toLowerCase()) == true||ceknamagroup1.includes(namagroup11.toLowerCase()) == true||ceknamagroup2.includes(namagroup11.toLowerCase()) == true||ceknamagroup3.includes(namagroup11.toLowerCase()) == true||ceknamagroup4.includes(namagroup11.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                clicksend();
                clearInterval()
                GM.setValue( 11,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup12.toLowerCase()) == true||ceknamagroup1.includes(namagroup12.toLowerCase()) == true||ceknamagroup2.includes(namagroup12.toLowerCase()) == true||ceknamagroup3.includes(namagroup12.toLowerCase()) == true||ceknamagroup4.includes(namagroup12.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                clicksend();
                clearInterval()
                GM.setValue( 12,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup13.toLowerCase()) == true||ceknamagroup1.includes(namagroup13.toLowerCase()) == true||ceknamagroup2.includes(namagroup13.toLowerCase()) == true||ceknamagroup3.includes(namagroup13.toLowerCase()) == true||ceknamagroup4.includes(namagroup13.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                clicksend();
                clearInterval()
                GM.setValue( 13,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup14.toLowerCase()) == true||ceknamagroup1.includes(namagroup14.toLowerCase()) == true||ceknamagroup2.includes(namagroup14.toLowerCase()) == true||ceknamagroup3.includes(namagroup14.toLowerCase()) == true||ceknamagroup4.includes(namagroup14.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                clicksend();
                clearInterval()
                GM.setValue( 14,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup15.toLowerCase()) == true||ceknamagroup1.includes(namagroup15.toLowerCase()) == true||ceknamagroup2.includes(namagroup15.toLowerCase()) == true||ceknamagroup3.includes(namagroup15.toLowerCase()) == true||ceknamagroup4.includes(namagroup15.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                clicksend();
                clearInterval()
                GM.setValue( 15,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup16.toLowerCase()) == true||ceknamagroup1.includes(namagroup16.toLowerCase()) == true||ceknamagroup2.includes(namagroup16.toLowerCase()) == true||ceknamagroup3.includes(namagroup16.toLowerCase()) == true||ceknamagroup4.includes(namagroup16.toLowerCase()) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                clicksend();
                clearInterval()
                GM.setValue( 16,1);
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
    }






},refresh * 10)



























function cekjam(target, pattern){
    var value = 0;
    var ven = target.slice(0, 7);

    pattern.forEach(function(word){
        value = value + ven.includes(word);

    });
    return (value === 1)
}









function clicksend() {
    /*Tampilkan TOMBOL SEND*/
    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
    /*Tekan TOMBOL SEND*/
    var clicksendcoment = document.getElementsByClassName("textbox-submit-button")[0];
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent ("mousedown", true, true);
    clicksendcoment.dispatchEvent (clickEvent);
    /*Tekan TOMBOL SEND*/
    GM.setValue("CLICKCOMMENT", 1);
}
