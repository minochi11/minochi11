// ==UserScript==
// @name         NEW MANYUT2
// @namespace    http://tampermonkey.net/
// @version      3.4
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/MANYUT%20V2/MANYUT2.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/MANYUT%20V2/MANYUT2.js
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
var Comment1 = '#shiokelinci4d*EKODOK33*95*59'; 

var namagroup2 = 'WOLF138';
var Comment2 = 'EKORENG51 = 14*04*65 #WOLF138 #TOGELWOLF138'; 

var namagroup3 = 'TiktakTogel';
var Comment3 = '#Tiktaktogel / EKOJIM46 / 58 , 84 , 62'; 

var namagroup4 = 'GAIB4D';
var Comment4 = 'GAIB4D=EKODAM375=72*57*76'; 

var namagroup5 = 'KEITOGEL';
var Comment5 = '#keitogel = EKOROK64 = 14*04*65'; 

var namagroup6 = 'KiosToto';
var Comment6 = 'KIOSTOTO=EKONDANG12=58*84*62'; 

var namagroup7 = 'KHUSUS MACAU';
var Comment7 = '#ASEPTOGEL EKOCOK75 88*90*34'; 

var namagroup8 = 'ANGKER';
var Comment8 = 'ANGKER4D=EKORKU42=77*91*68'; 

var namagroup9 = 'GILA4D';
var Comment9 = 'GILA4D=EKORENG51=58*84*62'; 

var namagroup10 = 'JNETOTO';
var Comment10 = '#JNETOTO(EKOROK64)*55*95*59'; 

var namagroup11 = 'TOTOAKURAT';
var Comment11 = '#TA*EKOCOK75*33*10*85*'; 

var namagroup12 = 'BOCORAN PREDIKSI SDY';
var Comment12 = '#TOGELKUY EKOCONG41 77*91*68'; 

var namagroup13 = 'TOYIBSLOT';
var Comment13 = '#TOYIBSLOT ( EKOROP47 ) : 33*10*85'; 

var namagroup14 = 'GOSIPTOTO';
var Comment14 = '#GOSIPTOTO (EKOJAY52) : *72*57*76'; 

var namagroup15 = 'SNIPER';
var Comment15 = '#VESPATOGEL (EKOWIJAY1) 29*82*83'; 

var namagroup16 = '1231231';
var Comment16 = '';

/*======================================================================3D===============================================================*/
var namagroup17 = 'BORTOTO';
var Comment17 = '#Bortoto (MOCHKUR19) : 561*506*120'; 

var namagroup18 = 'Situstogel88';
var Comment18 = '#SITUSTOGEL88 ( MOCHI92 ) : 560*429*182'; 

var namagroup19 = 'NONSTOPGROUP';
var Comment19 = '( #LOMBA3DBADUT4D MODAR17 : 553 , 050 , 978 )'; 

var namagroup20 = 'LOTTE4D';
var Comment20 = '#LOTTE4D ( MOCHOK36 ) : 539*336*223'; 

var namagroup21 = 'OBI9';
var Comment21 = '#OBI9*MONTIR36*065*039*082*'; 

var namagroup22 = 'TOGEL838';
var Comment22 = '#TOGEL838 (MORATUL19) = 586*610*603'; 

var namagroup23 = 'DADU4D';
var Comment23 = '#DADU4D (826*236*904) MOKONDO17'; 

var namagroup24 = 'CPGTOTO';
var Comment24 = '#CPGTOTO ( MOSIOM19 ) : 019*389*374'; 

var namagroup25 = 'KARMASLOT';
var Comment25 = '#KARMASLOT = (MOLET25) 405*032*524 BETTING'; 

var namagroup26 = 'LINGTOGEL77';
var Comment26 = '#LINGTOGEL77*MOSIOM19*716*580*709'; 

var namagroup27 = 'AHHA4D';
var Comment27 = '( #ASHIAAAP MODAR17 : 534 , 769 , 926 )'; 

var namagroup28 = 'GTA';
var Comment28 = '#GTATOGEL {MORAK16} = 234*420*139'; 

var namagroup29 = 'CAPTOGEL';
var Comment29 = '#CAPTOGEL (MOKONG71)=*143*241*638'; 

var namagroup30 = 'OLBTOTO';
var Comment30 = '#OLBTOTO(MOKONG71)*673*771*913'; 

var namagroup31 = 'BROMOTOTO';
var Comment31 = 'MOCHO19 # 496/133/291 #YOGAPRO'; 

var namagroup32 = 'PAKDE4D';
var Comment32 = 'PAKDE4D ( MOCHKUR19 ) : 713*398*040';






/*Keyword*/
var keyword = ["room", "ROOM", "lomba","LOMBA","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","lomba angker4d","𝐋𝐎𝐌𝐁𝐀","ROOM_LOMBA","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","room lomba betting"];


/*Backlist Kata*/
var Backlist = ["rekap", "artikel", "hasil","jam berapa","room lomba freebet","nanti","kapan","bos","mana"];



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
GM.setValue("JAM", 0);
GM.setValue("KEYWORD", 0);
GM.setValue("BACKLIST", 0);
GM.setValue("CLICKCOMMENT", 0);
GM.setValue("DONE", 0);






    'use strict';

    var ceknamagroup = document.getElementsByClassName('native-text')[4].textContent;
    var ceknamagroup1 = document.getElementsByClassName('native-text')[5].textContent;
    var ceknamagroup2 = document.getElementsByClassName('native-text')[6].textContent;
    var ceknamagroup3 = document.getElementsByClassName('native-text')[7].textContent;
    var ceknamagroup4 = document.getElementsByClassName('native-text')[8].textContent;
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
    var cekjam9 = document.getElementsByClassName('native-text')[27].textContent

    var cekcomment1 = document.getElementsByClassName('native-text')[20].textContent.toLowerCase();
    var cekcomment2 = document.getElementsByClassName('native-text')[21].textContent.toLowerCase();
    var cekcomment3 = document.getElementsByClassName('native-text')[22].textContent.toLowerCase();
    var cekcomment4 = document.getElementsByClassName('native-text')[23].textContent.toLowerCase();
    var cekcomment5 = document.getElementsByClassName('native-text')[24].textContent.toLowerCase();
    var cekcomment6 = document.getElementsByClassName('native-text')[25].textContent.toLowerCase();
    var cekcomment7 = document.getElementsByClassName('native-text')[26].textContent.toLowerCase();
    var cekcomment8 = document.getElementsByClassName('native-text')[27].textContent.toLowerCase();
    var cekcomment9 = document.getElementsByClassName('native-text')[28].textContent.toLowerCase();
    var cekcomment10 = document.getElementsByClassName('native-text')[29].textContent.toLowerCase();
    var cekcomment11= document.getElementsByClassName('native-text')[30].textContent.toLowerCase();
    var cekcomment12= document.getElementsByClassName('native-text')[31].textContent.toLowerCase();

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

            if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true||ceknamagroup2.includes(namagroup1) == true||ceknamagroup3.includes(namagroup1) == true||ceknamagroup4.includes(namagroup1) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup2) == true||ceknamagroup1.includes(namagroup2) == true||ceknamagroup2.includes(namagroup2) == true||ceknamagroup3.includes(namagroup2) == true||ceknamagroup4.includes(namagroup2) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                clicksend();
                clearInterval()
                GM.setValue("DONE", 1);
                valid = false;
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true||ceknamagroup2.includes(namagroup3) == true||ceknamagroup3.includes(namagroup3) == true||ceknamagroup4.includes(namagroup3) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup4) == true||ceknamagroup1.includes(namagroup4) == true||ceknamagroup2.includes(namagroup4) == true||ceknamagroup3.includes(namagroup4) == true||ceknamagroup4.includes(namagroup4) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup5) == true||ceknamagroup1.includes(namagroup5) == true||ceknamagroup2.includes(namagroup5) == true||ceknamagroup3.includes(namagroup5) == true||ceknamagroup4.includes(namagroup5) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup6) == true||ceknamagroup1.includes(namagroup6) == true||ceknamagroup2.includes(namagroup6) == true||ceknamagroup3.includes(namagroup6) == true||ceknamagroup4.includes(namagroup6) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup7) == true||ceknamagroup1.includes(namagroup7) == true||ceknamagroup2.includes(namagroup7) == true||ceknamagroup3.includes(namagroup7) == true||ceknamagroup4.includes(namagroup7) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup8) == true||ceknamagroup1.includes(namagroup8) == true||ceknamagroup2.includes(namagroup8) == true||ceknamagroup3.includes(namagroup8) == true||ceknamagroup4.includes(namagroup8) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup9) == true||ceknamagroup1.includes(namagroup9) == true||ceknamagroup2.includes(namagroup9||ceknamagroup3.includes(namagroup9) == true||ceknamagroup4.includes(namagroup9) == true) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup10) == true||ceknamagroup1.includes(namagroup10) == true||ceknamagroup2.includes(namagroup10) == true||ceknamagroup3.includes(namagroup10) == true||ceknamagroup4.includes(namagroup10) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup11) == true||ceknamagroup1.includes(namagroup11) == true||ceknamagroup2.includes(namagroup11) == true||ceknamagroup3.includes(namagroup11) == true||ceknamagroup4.includes(namagroup11) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup12) == true||ceknamagroup1.includes(namagroup12) == true||ceknamagroup2.includes(namagroup12) == true||ceknamagroup3.includes(namagroup12) == true||ceknamagroup4.includes(namagroup12) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup13) == true||ceknamagroup1.includes(namagroup13) == true||ceknamagroup2.includes(namagroup13) == true||ceknamagroup3.includes(namagroup13) == true||ceknamagroup4.includes(namagroup13) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup14) == true||ceknamagroup1.includes(namagroup14) == true||ceknamagroup2.includes(namagroup14) == true||ceknamagroup3.includes(namagroup14) == true||ceknamagroup4.includes(namagroup14) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                clicksend();
                clearInterval();
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup15) == true||ceknamagroup1.includes(namagroup15) == true||ceknamagroup2.includes(namagroup15) == true||ceknamagroup3.includes(namagroup15) == true||ceknamagroup4.includes(namagroup15) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup16) == true||ceknamagroup1.includes(namagroup16) == true||ceknamagroup2.includes(namagroup16) == true||ceknamagroup3.includes(namagroup16) == true||ceknamagroup4.includes(namagroup16) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/


        /*========================================================================================================3D================================================================*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup17) == true||ceknamagroup1.includes(namagroup17) == true||ceknamagroup2.includes(namagroup17) == true||ceknamagroup3.includes(namagroup17) == true||ceknamagroup4.includes(namagroup17) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment17;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup18) == true||ceknamagroup1.includes(namagroup18) == true||ceknamagroup2.includes(namagroup18) == true||ceknamagroup3.includes(namagroup18) == true||ceknamagroup4.includes(namagroup18) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment18;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup19) == true||ceknamagroup1.includes(namagroup19) == true||ceknamagroup2.includes(namagroup19) == true||ceknamagroup3.includes(namagroup19) == true||ceknamagroup4.includes(namagroup19) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment19;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup20) == true||ceknamagroup1.includes(namagroup20) == true||ceknamagroup2.includes(namagroup20) == true||ceknamagroup3.includes(namagroup20) == true||ceknamagroup4.includes(namagroup20) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment20;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup21) == true||ceknamagroup1.includes(namagroup21) == true||ceknamagroup2.includes(namagroup21) == true||ceknamagroup3.includes(namagroup21) == true||ceknamagroup4.includes(namagroup21) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment21;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup22) == true||ceknamagroup1.includes(namagroup22) == true||ceknamagroup2.includes(namagroup22) == true||ceknamagroup3.includes(namagroup22) == true||ceknamagroup4.includes(namagroup22) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment22;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup23) == true||ceknamagroup1.includes(namagroup23) == true||ceknamagroup2.includes(namagroup23) == true||ceknamagroup3.includes(namagroup23) == true||ceknamagroup4.includes(namagroup23) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment23;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup24) == true||ceknamagroup1.includes(namagroup24) == true||ceknamagroup2.includes(namagroup24) == true||ceknamagroup3.includes(namagroup24) == true||ceknamagroup4.includes(namagroup24) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment24;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup25) == true||ceknamagroup1.includes(namagroup25) == true||ceknamagroup2.includes(namagroup25) == true||ceknamagroup3.includes(namagroup25) == true||ceknamagroup4.includes(namagroup25) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment25;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup26) == true||ceknamagroup1.includes(namagroup26) == true||ceknamagroup2.includes(namagroup26) == true||ceknamagroup3.includes(namagroup26) == true||ceknamagroup4.includes(namagroup26) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment26;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup27) == true||ceknamagroup1.includes(namagroup27) == true||ceknamagroup2.includes(namagroup27) == true||ceknamagroup3.includes(namagroup27) == true||ceknamagroup4.includes(namagroup27) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment27;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup28) == true||ceknamagroup1.includes(namagroup28) == true||ceknamagroup2.includes(namagroup28) == true||ceknamagroup3.includes(namagroup28) == true||ceknamagroup4.includes(namagroup28) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment28;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup29) == true||ceknamagroup1.includes(namagroup29) == true||ceknamagroup2.includes(namagroup29) == true||ceknamagroup3.includes(namagroup29) == true||ceknamagroup4.includes(namagroup29) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment29;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup30) == true||ceknamagroup1.includes(namagroup30) == true||ceknamagroup2.includes(namagroup30) == true||ceknamagroup3.includes(namagroup30) == true||ceknamagroup4.includes(namagroup30) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment30;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup31) == true||ceknamagroup1.includes(namagroup31) == true||ceknamagroup2.includes(namagroup31) == true||ceknamagroup3.includes(namagroup31) == true||ceknamagroup4.includes(namagroup31) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment31;
                clicksend();
                clearInterval()
                valid = false;
                GM.setValue("DONE", 1);
                location.href = "about:blank"

            }

        }
        /*End*/
        /*Komentar*/
        if(valid == true) {

            if (ceknamagroup.includes(namagroup32) == true||ceknamagroup1.includes(namagroup32) == true||ceknamagroup2.includes(namagroup32) == true||ceknamagroup3.includes(namagroup32) == true||ceknamagroup4.includes(namagroup32) == true) {
                /*cek nama group dan tulis commntar*/
                document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment32;
                clicksend();
                clearInterval()
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
    GM.setValue("CLICKCOMMENT", 1);
    /*Tekan TOMBOL SEND*/
}
