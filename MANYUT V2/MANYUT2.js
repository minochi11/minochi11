// ==UserScript==
// @name         NEW MANYUT2
// @namespace    http://tampermonkey.net/
// @version      3.38
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

var namagroup2 = 'PREDIKSI SYAIR';
var Comment2 = '#IYATOTO EKORENG51 14*04*65'; 

var namagroup3 = 'TiktakTogel';
var Comment3 = '#Tiktaktogel / EKOJIM46 / 58 , 84 , 62'; 

var namagroup4 = 'GAIB4D';
var Comment4 = 'GAIB4D=EKODAM375=72*57*76'; 

var namagroup5 = 'KEITOGEL';
var Comment5 = '#keitogel = (EKOROK64) = 14*04*65'; 

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

var namagroup14 = 'IDTOGEL';
var Comment14 = '#IDTOGEL*EKOJAY52*72*57*76'; 

var namagroup15 = 'SNIPER';
var Comment15 = '#VESPATOGEL (EKOWIJAY1) 29*82*83'; 

var namagroup16 = 'DENTOTO';
var Comment16 = '#DENTOTO 72*57*76 ( EKOR665 )';

/*======================================================================3D===============================================================*/
var namagroup17 = 'Pecah77';
var Comment17 = '#PECAH77 (MOCHKUR**) = 232*055*117'; 

var namagroup18 = 'CIKA';
var Comment18 = '#CIKA4D*MOCHI92*527*814*125'; 

var namagroup19 = 'DETIKGROUP';
var Comment19 = '#DETIKTOTO*MOLET25*511*975*878'; 

var namagroup20 = 'PAO4D';
var Comment20 = '#PAO4D (MOCHOK36) = 892*411*180'; 

var namagroup21 = 'OBI';
var Comment21 = '#OBI9*MONTIR36*028*570*322*'; 

var namagroup22 = 'TOGEL838';
var Comment22 = '#TOGEL838 (MORATUL19) = 433*014*551'; 

var namagroup23 = 'ABUTOGEL';
var Comment23 = '#ABUTOGEL*MOKONG71*590*523*137'; 

var namagroup24 = 'OTU SLOT';
var Comment24 = '#OTUSLOT*MOSIOM19*515*694*BETTING'; 

var namagroup25 = 'BUSURGROUP';
var Comment25 = commentpasar('#KAPAK4D*MOLET25*553*310*143'); 

var namagroup26 = 'LING77';
var Comment26 = '#LINGTOGEL77*MOSIOM19*076*944*027'; 

var namagroup27 = 'ALEXISTOGEL';
var Comment27 = '#ALEXISTOGEL(MODAR17) 3D = 593*670*575'; 

var namagroup28 = 'LOMBA AMANAH';
var Comment28 = '#GTATOGEL(MORAK16)*311*695*851'; 

var namagroup29 = 'DASARTOTO';
var Comment29 = '#DASARTOTO*MOKONG71*820*021*503'; 

var namagroup30 = 'PORTOGEL';
var Comment30 = '#PORTOGEL (MOKONG71) = 454*316*996'; 

var namagroup31 = 'PREDIKSI TOTO';
var Comment31 = 'MOCHO19 # 161/676/394 #YOGAPRO'; 

var namagroup32 = 'KITAB4D';
var Comment32 = '{MOCHKUR19} = 908*373*151 #AGENTOGELKITAB4D #DAFTARTOGELKITAB4D';


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
