// ==UserScript==
// @name         NEW MANYUT3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/MANYUT%20V2/MANYUT3.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/MANYUT%20V2/MANYUT3.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==



var refresh = 90;




/*===================================2D==========================================*/

var namagroup1 = "BOCORAN PREDIKSI SDY";
var Comment1 = "#TOGELKUY ERAGUN68 32*46*70";

var namagroup2 = "HIGH4D";
var Comment2 = "EROSI52 = 43*48*31 #HIGH4D #TOGELHIGH4D";

var namagroup3 = "PORTOGEL OFFICIAL";
var Comment3 = "#PORTOGEL (ERFGUN35) : 51*38*52";

var namagroup4 = "GAIB4D";
var Comment4 = "GAIB4D=ERGUNA14=41*93*97";

var namagroup5 = "KEITOGEL";
var Comment5 = "#keitogel = ERAKOL156 = 43*48*31";

var namagroup6 = "KiosToto";
var Comment6 = "KIOSTOTO=ERJOK64=06*53*61";

var namagroup7 = "KHUSUS MACAU";
var Comment7 = "#ASEPTOGEL EROSI52 98*92*67";

var namagroup8 = "ANGKER";
var Comment8 = "ANGKER4D=ERFANGUN15=32*46*70";

var namagroup9 = "GILA4D";
var Comment9 = "GILA4D=ERGUN51=06*53*61";

var namagroup10 = "WAHANATOGEL";
var Comment10 = "#WAHANATOGEL(ERFANDA12) : 41*93*97";

var namagroup11 = "Tiktak";
var Comment11 = "#Tiktaktogel / ERKONT01 / 06 , 53 , 61";

var namagroup12 = "SHIOKELINCI4D";
var Comment12 = "#shiokelinci4d*EROSA23*30*71";

var namagroup13 = "SNIPER NUSANTARA";
var Comment13 = "#VESPATOGEL (ERKON23) 54*03*11";

var namagroup14 = "AXISTOGEL OFFICIAL";
var Comment14 = "#BETTING ERFANDA12: 06*53*61";

var namagroup15 = "TOTOAKURAT";
var Comment15 = "#TA*EROSI52*51*38*52*";

var namagroup16 = "JNETOTO";
var Comment16 = "#JNETOTO(ERAKOL156)*30*71*24";

/*===================================3D==========================================*/

var namagroup17 = 'BMWGROUP';
var Comment17 = 'FALS4D/ALDIANAS16*892*513*945';

var namagroup18 = 'Situstogel88';
var Comment18 = '#SITUSTOGEL88 ( ALDRUN19 ) : 931*463*159';

var namagroup19 = 'NONSTOPGROUP';
var Comment19 = '( #LOMBA3DBADUT4D ALASAN36 : 877 , 484 , 144 )';

var namagroup20 = 'LOTTE4D';
var Comment20 = '#LOTTE4D ( ALFATAH16 ) : 812*450*041';

var namagroup21 = 'OBI9';
var Comment21 = '#OBI9*ALIMN26*016*710*411*';

var namagroup22 = 'TOGEL838';
var Comment22 = '#TOGEL838 (ALAHAKBAR) = 804*135*684';

var namagroup23 = 'DADU4D';
var Comment23 = '#DADU4D (918*294*540) ALBUT35';

var namagroup24 = 'CPGTOTO';
var Comment24 = '#CPGTOTO ( ALKUDIR19 ) : 491*986*889';

var namagroup25 = 'DETIKGROUP';
var Comment25 = '#Detiktoto*ALKON26*721*079*574';

var namagroup26 = 'LINGTOGEL77';
var Comment28 = '#LINGTOGEL77*ALKUDIR19*462*749*747';

var namagroup27 = 'AHHA4D';
var Comment27 = '( #ASHIAAAP ALASAN36 : 516 , 752 , 224 )';

var namagroup28 = 'GTA';
var Comment28 = '#GTATOGEL {ALDRUN19} = 821*668*269';

var namagroup29 = 'CAPTOGEL';
var Comment29 = '#CAPTOGEL (ALUMNI212)=*031*174*310';

var namagroup30 = 'OLBTOTO';
var Comment30 = '#OLBTOTO(ALUMNI212)*324*221*074';

var namagroup31 = 'BROMOTOTO';
var Comment31 = 'ALAHMBUH # 486/964/566 #YOGAPRO';

var namagroup32 = 'PAKDE4D';
var Comment32 = 'PAKDE4D ( ALTIMBUL ) : 745*898*330';















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
var id18 = await GM.getValue(18);
var id19 = await GM.getValue(19);
var id20 = await GM.getValue(20);
var id21 = await GM.getValue(21);
var id22 = await GM.getValue(22);
var id23 = await GM.getValue(23);
var id24 = await GM.getValue(24);
var id25 = await GM.getValue(25);
var id26 = await GM.getValue(26);
var id27 = await GM.getValue(27);
var id28 = await GM.getValue(28);
var id29 = await GM.getValue(29);
var id30 = await GM.getValue(30);
var id31 = await GM.getValue(31);
var id32 = await GM.getValue(32);




/*Keyword*/
var keyword = ["ROOM", "room", "𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","lomba angker4d","room lomba","ROOM_LOMBA","𝗥𝗢𝗢𝗠 𝗟𝗢𝗠𝗕𝗔","room lomba betting"];


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


    if (tm == "" || tm == undefined || tm == null) {
        GM.setValue("time", hour);
    }

    if ( hour > tm + 2 || hour < tm||document.URL.includes("google") ){

        for (var kr = 1; kr < 33; kr++) {
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
            if(waktupost[coki].textContent.includes("Aktivitas")) {
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

    /* 3D */
    if (ceknamagroup.includes(namagroup17) == true||ceknamagroup1.includes(namagroup17) == true) {
        if (id17 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup18) == true||ceknamagroup1.includes(namagroup18) == true) {
        if (id18 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup19) == true||ceknamagroup1.includes(namagroup19) == true) {
        if (id19 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup20) == true||ceknamagroup1.includes(namagroup20) == true) {
        if (id20 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup21) == true||ceknamagroup1.includes(namagroup21) == true) {
        if (id21 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup22) == true||ceknamagroup1.includes(namagroup22) == true) {
        if (id22 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup23) == true||ceknamagroup1.includes(namagroup23) == true) {
        if (id23 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup24) == true||ceknamagroup1.includes(namagroup24) == true) {
        if (id24 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup25) == true||ceknamagroup1.includes(namagroup25) == true) {
        if (id25 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup26) == true||ceknamagroup1.includes(namagroup26) == true) {
        if (id26 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup27) == true||ceknamagroup1.includes(namagroup27) == true) {
        if (id27 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup28) == true||ceknamagroup1.includes(namagroup28) == true) {
        if (id28 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup29) == true||ceknamagroup1.includes(namagroup29) == true) {
        if (id29 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup30) == true||ceknamagroup1.includes(namagroup30) == true) {
        if (id30 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup31) == true||ceknamagroup1.includes(namagroup31) == true) {
        if (id31 == "1"){
            location.href = "about:blank"
            window.close()
        }
    }
    if (ceknamagroup.includes(namagroup32) == true||ceknamagroup1.includes(namagroup32) == true) {
        if (id32 == "1"){
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
    if (cekjam1.includes("Baru saja")||cekjam(cekjam1,jam) == 1||cekjam2.includes("Baru saja")||cekjam(cekjam2,jam) == 1||cekjam3.includes("Baru saja")||cekjam(cekjam3,jam) == 1||cekjam4.includes("Baru saja")||cekjam(cekjam4,jam) == 1||cekjam5.includes("Baru saja")||cekjam(cekjam5,jam) == 1||cekjam6.includes("Baru saja")||cekjam(cekjam6,jam) == 1||cekjam7.includes("Baru saja")||cekjam(cekjam7,jam) == 1) {
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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

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
                    location.href = "about:blank"

                }
            }
        }
        /*End*/


        /*-----------------------------------------------3D-----------------------------------------------------------------*/
        /*Komentar*/
        if(valid == true) {
            if (id17 == "" || id17 == undefined || id17 == null ||id17 == "0") {
                if (ceknamagroup.includes(namagroup17) == true||ceknamagroup1.includes(namagroup17) == true||ceknamagroup2.includes(namagroup17) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment17;
                    clicksend();
                    clearInterval()
                    GM.setValue( 17,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id18 == "" || id18 == undefined || id18 == null ||id18 == "0") {
                if (ceknamagroup.includes(namagroup18) == true||ceknamagroup1.includes(namagroup18) == true||ceknamagroup2.includes(namagroup18) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment18;
                    clicksend();
                    clearInterval()
                    GM.setValue( 18,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id19 == "" || id19 == undefined || id19 == null ||id19 == "0") {
                if (ceknamagroup.includes(namagroup19) == true||ceknamagroup1.includes(namagroup19) == true||ceknamagroup2.includes(namagroup19) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment19;
                    clicksend();
                    clearInterval()
                    GM.setValue( 19,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id20 == "" || id20 == undefined || id20 == null ||id20 == "0") {
                if (ceknamagroup.includes(namagroup20) == true||ceknamagroup1.includes(namagroup20) == true||ceknamagroup2.includes(namagroup20) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment20;
                    clicksend();
                    clearInterval()
                    GM.setValue( 20,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id21 == "" || id21 == undefined || id21 == null ||id21 == "0") {
                if (ceknamagroup.includes(namagroup21) == true||ceknamagroup1.includes(namagroup21) == true||ceknamagroup2.includes(namagroup21) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment21;
                    clicksend();
                    clearInterval()
                    GM.setValue( 21,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id22 == "" || id22 == undefined || id22 == null ||id22 == "0") {
                if (ceknamagroup.includes(namagroup22) == true||ceknamagroup1.includes(namagroup22) == true||ceknamagroup2.includes(namagroup22) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment22;
                    clicksend();
                    clearInterval()
                    GM.setValue( 22,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id23 == "" || id23 == undefined || id23 == null ||id23 == "0") {
                if (ceknamagroup.includes(namagroup23) == true||ceknamagroup1.includes(namagroup23) == true||ceknamagroup2.includes(namagroup23) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment23;
                    clicksend();
                    clearInterval()
                    GM.setValue( 23,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id24 == "" || id24 == undefined || id24 == null ||id24 == "0") {
                if (ceknamagroup.includes(namagroup24) == true||ceknamagroup1.includes(namagroup24) == true||ceknamagroup2.includes(namagroup24) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment24;
                    clicksend();
                    clearInterval()
                    GM.setValue( 24,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id25 == "" || id25 == undefined || id25 == null ||id25 == "0") {
                if (ceknamagroup.includes(namagroup25) == true||ceknamagroup1.includes(namagroup25) == true||ceknamagroup2.includes(namagroup25) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment25;
                    clicksend();
                    clearInterval()
                    GM.setValue( 25,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id26 == "" || id26 == undefined || id26 == null ||id26 == "0") {
                if (ceknamagroup.includes(namagroup26) == true||ceknamagroup1.includes(namagroup26) == true||ceknamagroup2.includes(namagroup26) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment26;
                    clicksend();
                    clearInterval()
                    GM.setValue( 26,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id27 == "" || id27 == undefined || id27 == null ||id27 == "0") {
                if (ceknamagroup.includes(namagroup27) == true||ceknamagroup1.includes(namagroup27) == true||ceknamagroup2.includes(namagroup27) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment27;
                    clicksend();
                    clearInterval()
                    GM.setValue( 27,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id28 == "" || id28 == undefined || id28 == null ||id28 == "0") {
                if (ceknamagroup.includes(namagroup28) == true||ceknamagroup1.includes(namagroup28) == true||ceknamagroup2.includes(namagroup28) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment28;
                    clicksend();
                    clearInterval()
                    GM.setValue( 28,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id29 == "" || id29 == undefined || id29 == null ||id29 == "0") {
                if (ceknamagroup.includes(namagroup29) == true||ceknamagroup1.includes(namagroup29) == true||ceknamagroup2.includes(namagroup29) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment29;
                    clicksend();
                    clearInterval()
                    GM.setValue( 29,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id30 == "" || id30 == undefined || id30 == null ||id30 == "0") {
                if (ceknamagroup.includes(namagroup30) == true||ceknamagroup1.includes(namagroup30) == true||ceknamagroup2.includes(namagroup30) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment30;
                    clicksend();
                    clearInterval()
                    GM.setValue( 30,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id31 == "" || id31 == undefined || id31 == null ||id31 == "0") {
                if (ceknamagroup.includes(namagroup31) == true||ceknamagroup1.includes(namagroup31) == true||ceknamagroup2.includes(namagroup31) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment31;
                    clicksend();
                    clearInterval()
                    GM.setValue( 31,1);
                    valid = false;
                    location.href = "about:blank"

                }
            }
        }
        /*End*/
        /*Komentar*/
        if(valid == true) {
            if (id32 == "" || id32 == undefined || id32 == null ||id32 == "0") {
                if (ceknamagroup.includes(namagroup32) == true||ceknamagroup1.includes(namagroup32) == true||ceknamagroup2.includes(namagroup32) == true) {
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment32;
                    clicksend();
                    clearInterval()
                    GM.setValue( 32,1);
                    valid = false;
                    location.href = "about:blank"

                }
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
}
