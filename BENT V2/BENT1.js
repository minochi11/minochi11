// ==UserScript==
// @name         NEW BENT1
// @namespace    http://tampermonkey.net/
// @version      3.45
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/BENT%20V2/BENT1.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/BENT%20V2/BENT1.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==


var refresh = 90;



var namagroup1 = 'VELBET4D';
var Comment1 = '{ASTRI29} = #VELBET4D = 70*90*23'; 

var namagroup2 = 'ANGKER';
var Comment2 = 'ANGKER4D=ASRIN32=29*96*56'; 

var namagroup3 = 'JNETOTO';
var Comment3 = '#JNETOTO(ASABKUBUR12)*50*03*92'; 

var namagroup4 = 'GAIB4D';
var Comment4 = 'GAIB4D=ASKIPLI99=65*13*15'; 

var namagroup5 = 'TOYIBSLOT';
var Comment5 = '#TOYIBSLOT ( ASEKASEK12 ) : 31*19*06'; 

var namagroup6 = 'TiktakTogel';
var Comment6 = '#Tiktaktogel / AZKALAN / 31 , 19 , 06'; 

var namagroup7 = 'KHUSUS MACAU';
var Comment7 = '#ASEPTOGEL ASIZAN33 86*01*94'; 

var namagroup8 = 'BOCORAN PREDIKSI SDY';
var Comment8 = '#TOGELKUY ASKALIMAN 33*22*67'; 

var namagroup9 = 'SHIOKELINCI4D';
var Comment9 = '#shiokelinci4d*ASLISUPER12*86*01'; 

var namagroup10 = 'GILA4D';
var Comment10 = 'GILA4D=ASALAM44=65*13*15'; 

var namagroup11 = 'KEITOGEL';
var Comment11 = '#keitogel = (ASABKUBUR12) = 70*90*23'; 

var namagroup12 = 'KiosToto';
var Comment12 = 'KIOSTOTO=ASIZAN33=79*16*08'; 

var namagroup13 = 'TOTOAKURAT';
var Comment13 = '#TA*ASIMATJUMBO*50*03*92*'; 

var namagroup14 = 'IDTOGEL';
var Comment14 = '#IDTOGEL*ASBHUN*79*16*08'; 

var namagroup15 = 'DENTOTO';
var Comment15 = '#DENTOTO 79*16*08 ( ASTADINA12 )'; 

var namagroup16 = 'PREDIKSI SYAIR';
var Comment16 = '#IYATOTO ASTRI29 70*90*23';




/*======================================================================3D===============================================================*/
var namagroup17 = 'TESLATOTO';
var Comment17 = '#TESLATOTO/ASABKUBUR12/742*396*837'; 

var namagroup18 = 'CIKA';
var Comment18 = '#CIKA4D*DOLENG28*829*182*563'; 

var namagroup19 = 'DETIKGROUP';
var Comment19 = '#DETIKTOTO*DAWET121*212*913*566'; 

var namagroup20 = 'PAO4D';
var Comment20 = '#PAO4D (ASABKUBUR12) = 578*382*447'; 

var namagroup21 = 'SILATOGEL';
var Comment21 = '#SILATOGELBETTING (DOPLO19) = 248*366*052'; 

var namagroup22 = 'TOGEL838';
var Comment22 = '#TOGEL838 (ASIMATJUMBO) = 845*615*333'; 

var namagroup23 = 'ABUTOGEL';
var Comment23 = '#ABUTOGEL*DOPLOSU1*730*146*072'; 

var namagroup24 = 'OTU SLOT';
var Comment24 = '#OTUSLOT*ASIMATJUMBO*031*231*507*BETTING'; 

var namagroup25 = 'SILATOGEL';
var Comment25 = '#SILATOGELBETTING (DAWET121) = 597*762*443'; 

var namagroup26 = 'LING77';
var Comment26 = '#LINGTOGEL77*ASTADINA12*176*491*336'; 

var namagroup27 = 'ALEXISTOGEL';
var Comment27 = '#ALEXISTOGEL(ASKUTENG12) 3D = 363*128*018'; 

var namagroup28 = 'LOMBA AMANAH';
var Comment28 = '#GTATOGEL(ASABKUBUR12)*609*230*657'; 

var namagroup29 = 'BBNI4D';
var Comment29 = '#(BBNI4D) = (DOPLOSU1) 235*220*872'; 

var namagroup30 = 'PORTOGEL';
var Comment30 = '#PORTOGEL (ASEKASEK12) = 343*850*808'; 

var namagroup31 = 'PREDIKSI TOTO';
var Comment31 = 'DONOKU1 # 737/386/614 #YOGAPRO'; 

var namagroup32 = 'CRYSTAL';
var Comment32 = '#CRYSTALTOTO*DONAL13*121*290*397';


/*Keyword*/
var keyword = ["ROOM", "𝗥𝗢𝗢𝗠", "LOMBA","𝗟𝗢𝗠𝗕𝗔","𝐋𝐎𝐌𝐁𝐀"];

/*Backlist Kata*/
var Backlist1 = "GOJEK";
var Backlist2 = "REKAP";
var Backlist3 = "HASIL";
var Backlist4 = "ROOM LOMBA FREEBET";
var Backlist5 = "Rekap";
var Backlist6 = "RESULT";

var jam = ["Baru sa","1 menit","2 menit","3 menit","4 menit","5 menit","6 menit","7 menit","8 menit","1 mnt","2 mnt","3 mnt","4 mnt","5 mnt","6 mnt","7 mnt","8 mnt"];

setInterval(function(){
    GM.setValue("JAM", 0);
    GM.setValue("KEYWORD", 0);
    GM.setValue("BACKLIST", 0);
    GM.setValue("CLICKCOMMENT", 0);
    GM.setValue("DONE", 0);



    var ceknamagroup
    var ceknamagroup1
    var ceknamagroup2
    var ceknamagroup3
    var ceknamagroup4


    'use strict';
    if( document.getElementsByClassName('native-text')[4]){
        ceknamagroup = document.getElementsByClassName('native-text')[4].textContent;
    }
    if( document.getElementsByClassName('native-text')[5]){
        ceknamagroup1 = document.getElementsByClassName('native-text')[5].textContent;
    }
    if( document.getElementsByClassName('native-text')[6]){
        ceknamagroup2 = document.getElementsByClassName('native-text')[6].textContent;
    }
    if( document.getElementsByClassName('native-text')[7]){
        ceknamagroup3 = document.getElementsByClassName('native-text')[7].textContent;
    }
    if( document.getElementsByClassName('native-text')[8]){
        ceknamagroup4 = document.getElementsByClassName('native-text')[8].textContent;
    }

    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    var urutkan2 = document.querySelectorAll("[data-mcomponent='TextArea']");
    var waktupost = document.querySelectorAll("[class='native-text']");
    window.scrollTo(0, 2000);
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




    var cekjam = document.getElementsByClassName('native-text')
    var cekcomment = document.getElementsByClassName('native-text')




    for (let ntv = 10; ntv < 60; ntv++) {

        if(cekjam[ntv]) {
            if(cekjam[ntv].textContent){
                for (var u in jam){

                    if(cekjam[ntv].textContent.slice(0,7).includes(jam[u])){
                        for (let ntc = ntv; ntc < ntv+5; ntc++) {
                            if(cekcomment[ntc]){
                                if(cekcomment[ntc].textContent.includes(Backlist1)||cekcomment[ntc].textContent.includes(Backlist2)||cekcomment[ntc].textContent.includes(Backlist3)||cekcomment[ntc].textContent.includes(Backlist4)||cekcomment[ntc].textContent.includes(Backlist5)||cekcomment[ntc].textContent.includes(Backlist6)){
                                    break;
                                }

                                if(cekcomment[ntc].textContent){

                                    for (var j in keyword){

                                        if (cekcomment[ntc].textContent.includes(keyword[j])){
                                            /*Jika Keyword Di TEMUKAN */

                                            for (var krd = ntc; krd < ntc+5; krd++){
                                                if(waktupost[krd]){
                                                    if(waktupost[krd].textContent.includes("Tulis komentar")) {
                                                        /*buka koment box */
                                                        waktupost[krd].click();

                                                        if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true||ceknamagroup2.includes(namagroup1) == true||ceknamagroup3.includes(namagroup1) == true||ceknamagroup4.includes(namagroup1) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                            GM.setValue(namagroup1, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup2) == true||ceknamagroup1.includes(namagroup2) == true||ceknamagroup2.includes(namagroup2) == true||ceknamagroup3.includes(namagroup2) == true||ceknamagroup4.includes(namagroup2) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                                                            clicksend();
                                                            clearInterval()
                                                            GM.setValue("DONE", 1);

                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup2, keyword[j] + " " + jam[u] );
                                                            return;
                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true||ceknamagroup2.includes(namagroup3) == true||ceknamagroup3.includes(namagroup3) == true||ceknamagroup4.includes(namagroup3) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup3, keyword[j] + " " + jam[u] );
                                                            return;
                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup4) == true||ceknamagroup1.includes(namagroup4) == true||ceknamagroup2.includes(namagroup4) == true||ceknamagroup3.includes(namagroup4) == true||ceknamagroup4.includes(namagroup4) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup4, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup5) == true||ceknamagroup1.includes(namagroup5) == true||ceknamagroup2.includes(namagroup5) == true||ceknamagroup3.includes(namagroup5) == true||ceknamagroup4.includes(namagroup5) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup5, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup6) == true||ceknamagroup1.includes(namagroup6) == true||ceknamagroup2.includes(namagroup6) == true||ceknamagroup3.includes(namagroup6) == true||ceknamagroup4.includes(namagroup6) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup6, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup7) == true||ceknamagroup1.includes(namagroup7) == true||ceknamagroup2.includes(namagroup7) == true||ceknamagroup3.includes(namagroup7) == true||ceknamagroup4.includes(namagroup7) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup7, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup8) == true||ceknamagroup1.includes(namagroup8) == true||ceknamagroup2.includes(namagroup8) == true||ceknamagroup3.includes(namagroup8) == true||ceknamagroup4.includes(namagroup8) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup8, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup9) == true||ceknamagroup1.includes(namagroup9) == true||ceknamagroup2.includes(namagroup9) == true||ceknamagroup3.includes(namagroup9) == true||ceknamagroup4.includes(namagroup9) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup9, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup10) == true||ceknamagroup1.includes(namagroup10) == true||ceknamagroup2.includes(namagroup10) == true||ceknamagroup3.includes(namagroup10) == true||ceknamagroup4.includes(namagroup10) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup10, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup11) == true||ceknamagroup1.includes(namagroup11) == true||ceknamagroup2.includes(namagroup11) == true||ceknamagroup3.includes(namagroup11) == true||ceknamagroup4.includes(namagroup11) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup11, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup12) == true||ceknamagroup1.includes(namagroup12) == true||ceknamagroup2.includes(namagroup12) == true||ceknamagroup3.includes(namagroup12) == true||ceknamagroup4.includes(namagroup12) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup12, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup13) == true||ceknamagroup1.includes(namagroup13) == true||ceknamagroup2.includes(namagroup13) == true||ceknamagroup3.includes(namagroup13) == true||ceknamagroup4.includes(namagroup13) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup13, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup14) == true||ceknamagroup1.includes(namagroup14) == true||ceknamagroup2.includes(namagroup14) == true||ceknamagroup3.includes(namagroup14) == true||ceknamagroup4.includes(namagroup14) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                                                            clicksend();
                                                            clearInterval();

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup14, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup15) == true||ceknamagroup1.includes(namagroup15) == true||ceknamagroup2.includes(namagroup15) == true||ceknamagroup3.includes(namagroup15) == true||ceknamagroup4.includes(namagroup15) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup15, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup16) == true||ceknamagroup1.includes(namagroup16) == true||ceknamagroup2.includes(namagroup16) == true||ceknamagroup3.includes(namagroup16) == true||ceknamagroup4.includes(namagroup16) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup16, keyword[j] + " " + jam[u] );
                                                            return;

                                                        }


                                                        /*End*/


                                                        /*========================================================================================================3D================================================================*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup17) == true||ceknamagroup1.includes(namagroup17) == true||ceknamagroup2.includes(namagroup17) == true||ceknamagroup3.includes(namagroup17) == true||ceknamagroup4.includes(namagroup17) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment17;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup17, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup18) == true||ceknamagroup1.includes(namagroup18) == true||ceknamagroup2.includes(namagroup18) == true||ceknamagroup3.includes(namagroup18) == true||ceknamagroup4.includes(namagroup18) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment18;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup18, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup19) == true||ceknamagroup1.includes(namagroup19) == true||ceknamagroup2.includes(namagroup19) == true||ceknamagroup3.includes(namagroup19) == true||ceknamagroup4.includes(namagroup19) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment19;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup19, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup20) == true||ceknamagroup1.includes(namagroup20) == true||ceknamagroup2.includes(namagroup20) == true||ceknamagroup3.includes(namagroup20) == true||ceknamagroup4.includes(namagroup20) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment20;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup20, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup21) == true||ceknamagroup1.includes(namagroup21) == true||ceknamagroup2.includes(namagroup21) == true||ceknamagroup3.includes(namagroup21) == true||ceknamagroup4.includes(namagroup21) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment21;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup21, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup22) == true||ceknamagroup1.includes(namagroup22) == true||ceknamagroup2.includes(namagroup22) == true||ceknamagroup3.includes(namagroup22) == true||ceknamagroup4.includes(namagroup22) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment22;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup22, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup23) == true||ceknamagroup1.includes(namagroup23) == true||ceknamagroup2.includes(namagroup23) == true||ceknamagroup3.includes(namagroup23) == true||ceknamagroup4.includes(namagroup23) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment23;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup23, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup24) == true||ceknamagroup1.includes(namagroup24) == true||ceknamagroup2.includes(namagroup24) == true||ceknamagroup3.includes(namagroup24) == true||ceknamagroup4.includes(namagroup24) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment24;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup24, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup25) == true||ceknamagroup1.includes(namagroup25) == true||ceknamagroup2.includes(namagroup25) == true||ceknamagroup3.includes(namagroup25) == true||ceknamagroup4.includes(namagroup25) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment25;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup25, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup26) == true||ceknamagroup1.includes(namagroup26) == true||ceknamagroup2.includes(namagroup26) == true||ceknamagroup3.includes(namagroup26) == true||ceknamagroup4.includes(namagroup26) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment26;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup26, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup27) == true||ceknamagroup1.includes(namagroup27) == true||ceknamagroup2.includes(namagroup27) == true||ceknamagroup3.includes(namagroup27) == true||ceknamagroup4.includes(namagroup27) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment27;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup27, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup28) == true||ceknamagroup1.includes(namagroup28) == true||ceknamagroup2.includes(namagroup28) == true||ceknamagroup3.includes(namagroup28) == true||ceknamagroup4.includes(namagroup28) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment28;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup28, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup29) == true||ceknamagroup1.includes(namagroup29) == true||ceknamagroup2.includes(namagroup29) == true||ceknamagroup3.includes(namagroup29) == true||ceknamagroup4.includes(namagroup29) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment29;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup29, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup30) == true||ceknamagroup1.includes(namagroup30) == true||ceknamagroup2.includes(namagroup30) == true||ceknamagroup3.includes(namagroup30) == true||ceknamagroup4.includes(namagroup30) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment30;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup30, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup31) == true||ceknamagroup1.includes(namagroup31) == true||ceknamagroup2.includes(namagroup31) == true||ceknamagroup3.includes(namagroup31) == true||ceknamagroup4.includes(namagroup31) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment31;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup31, keyword[j]);
                                                            return;

                                                        }


                                                        /*End*/
                                                        /*Komentar*/


                                                        if (ceknamagroup.includes(namagroup32) == true||ceknamagroup1.includes(namagroup32) == true||ceknamagroup2.includes(namagroup32) == true||ceknamagroup3.includes(namagroup32) == true||ceknamagroup4.includes(namagroup32) == true) {
                                                            /*cek nama group dan tulis commntar*/
                                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment32;
                                                            clicksend();
                                                            clearInterval()

                                                            GM.setValue("DONE", 1);
                                                            location.href = "about:blank"
                                                             GM.setValue(namagroup32, keyword[j]);
                                                            return;

                                                        }

                                                    }
                                                }
                                            }
                                        }


                                    }

                                }
                                continue;
                            }

                        }
                    }

                }
            }
        }
    }



    /*Komentar*/



    /*End*/






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



function commentpasar(commenan){
    var hasil = "";

    var pasaran1 = "#SYDNEY"
    var pasaran2 = "#SINGAPORE"
    var pasaran3 = "#HONGKONG"
    var commentpasaran = ""
    var today = new Date().getHours();
    if (today >= 7 && today <= 11) {
        commentpasaran = pasaran1
    }
    if (today >= 12 && today <= 16) {
        commentpasaran = pasaran2
    }
    if (today >= 17 && today <= 21) {
        commentpasaran = pasaran3
    }


    return (commenan+commentpasaran)
}
