// ==UserScript==
// @name         NEW MANYUT3
// @namespace    http://tampermonkey.net/
// @version      3.90
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



var namagroup1 = 'SHIOKELINCI';
var Comment1 = '#shiokelinci4d*EROSA23*30*71'; 

var namagroup2 = 'MARKAS';
var Comment2 = 'IYATOTO EROSI52 43*48*31'; 

var namagroup3 = 'TiktakTogel';
var Comment3 = '#Tiktaktogel / ERKONT01 / 06 , 53 , 61'; 

var namagroup4 = 'G∆IB4D';
var Comment4 = 'GAIB4D=ERGUNA14=41*93*97'; 

var namagroup5 = 'KEITOGEL';
var Comment5 = '#keitogel = (ERAKOL156) = 43*48*31'; 

var namagroup6 = 'KIOSTOTO';
var Comment6 = 'KIOSTOTO=ERJOK64=06*53*61'; 

var namagroup7 = 'ASEP';
var Comment7 = '#ASEPTOGEL EROSI52 98*92*67'; 

var namagroup8 = 'ANGKER';
var Comment8 = 'ANGKER4D=ERFANGUN15=32*46*70'; 

var namagroup9 = 'GIL∆4D';
var Comment9 = 'GILA4D=ERGUN51=06*53*61'; 

var namagroup10 = 'JNE';
var Comment10 = '#JNETOTO(ERAKOL156)*30*71*24'; 

var namagroup11 = 'T_O_T_O_A_K_U_R_A_T';
var Comment11 = '#TA*EROSI52*51*38*52*'; 

var namagroup12 = 'BOCORAN PREDIKSI SDY';
var Comment12 = '#TOGELKUY ERAGUN68 32*46*70'; 

var namagroup13 = 'TOYIBSLOT';
var Comment13 = '#TOYIBSLOT ( ERFGUN35 ) : 51*38*52'; 

var namagroup14 = 'DENTOTO';
var Comment14 = '#DENTOTO 41*93*97 ( ERFGUN12 )'; 

var namagroup15 = 'DEWA';
var Comment15 = '#VESPATOGEL (ERKON23)  54*03*11'; 

var namagroup16 = '123123';
var Comment16 = '';

/*======================================================================3D===============================================================*/
var namagroup17 = 'TESLATOTO';
var Comment17 = '#TESLATOTO/ALTIMBUL/502*357*505'; 

var namagroup18 = 'CIKA';
var Comment18 = '#CIKA4D*ALDRUN19*271*918*951'; 

var namagroup19 = 'D_E_T_I_K';
var Comment19 = '#DETIKTOTO*ALKON26*681*696*252'; 

var namagroup20 = 'PAO4D';
var Comment20 = 'PAO4D (ALFATAH16) = 185*501*156'; 

var namagroup21 = 'ALJT';
var Comment21 = '#JALUR*ALIMN26*556*989*959'; 

var namagroup22 = 'TOGEL838';
var Comment22 = 'TOGEL838 (ALAHAKBAR) = 542*038*284'; 

var namagroup23 = 'ABUT0G3L';
var Comment23 = '#ABUTOGEL*ALUMNI212*947*385*378'; 

var namagroup24 = 'OTUSLOT';
var Comment24 = '#OTUSLOT*ALKUDIR19*286*139*BETTING'; 

var namagroup25 = 'JOGJATOTO';
var Comment25 = '#(JOGJATOTO)=ALKON26*840*932*012'; 

var namagroup26 = 'LING77';
var Comment26 = '#LINGTOGEL77*ALKUDIR19*516*376*257'; 

var namagroup27 = 'AL3XISTOG3L';
var Comment27 = '#ALEXISTOGEL(ALASAN36) 3D = 412*581*135'; 

var namagroup28 = 'COLA';
var Comment28 = '(ALUMNI212) = 726*259*190 #tebakangkacola'; 

var namagroup29 = 'AKIRA';
var Comment29 = '#AKIRATOTO*ALUMNI212*069*113*096'; 

var namagroup30 = 'PORTOGEL';
var Comment30 = '#PORTOGEL (ALUMNI212) = 594*725*119'; 

var namagroup31 = 'YOGA';
var Comment31 = 'ALAHMBUH # 785/772/583 #YOGAPRO'; 

var namagroup32 = 'BBFSTOTO';
var Comment32 = '#BBFSTOTO = (ALTIMBUL) = 132*138*846';


var jam = ["Baru sa","1 menit","2 menit","3 menit","4 menit","5 menit","6 menit","7 menit","8 menit","1 mnt","2 mnt","3 mnt","4 mnt","5 mnt","6 mnt","7 mnt","8 mnt"];



var keyword = ["ROOM", "𝗥𝗢𝗢𝗠", "LOMBA","𝗟𝗢𝗠𝗕𝗔","𝐋𝐎𝐌𝐁𝐀","LIMBA","ROM","R00M","R0M"];

var Backlist1 = "GOJEK";
var Backlist2 = "REKAP";
var Backlist3 = "HASIL";
var Backlist4 = "ROOM LOMBA FREEBET";
var Backlist5 = "Rekap";
var Backlist6 = "RESULT";


var myInterval = setInterval(function(){
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


    var ceknamagroup
    var ceknamagroup1
    var ceknamagroup2
    var ceknamagroup3
    var ceknamagroup4

    var cekcomment
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


    for (let ntv = 0; ntv < document.getElementsByClassName("native-text").length; ntv++) {
        var cekjam = document.getElementsByClassName('native-text')
        for (var u in jam){
            if(cekjam[ntv].textContent.slice(0,7).includes(jam[u])){
                console.log("waktu postingan =" + cekjam[ntv].textContent);
                for (let ntva = ntv + 1; ntva < ntv + 3; ntva++) {

                    if(document.getElementsByClassName('native-text')[ntva].textContent.length >= 5){
                        console.log("postingan =" + document.getElementsByClassName('native-text')[ntva].textContent);
                        cekcomment = document.getElementsByClassName('native-text')
                        if(cekcomment[ntva].textContent.includes(Backlist1)||cekcomment[ntva].textContent.includes(Backlist2)||cekcomment[ntva].textContent.includes(Backlist3)||cekcomment[ntva].textContent.includes(Backlist4)||cekcomment[ntva].textContent.includes(Backlist5)||cekcomment[ntva].textContent.includes(Backlist6)){
                            break;
                        }
                        for (var j in keyword){

                            if (document.getElementsByClassName('native-text')[ntva].textContent.includes(keyword[j])){
                                console.log("Keyword Ditemukan ");


                                for (let ntvb = ntva ; ntvb < ntva + 6; ntvb++) {
                                    if(document.querySelectorAll("[class='native-text']")[ntvb].textContent.includes("Tulis")) {
                                        console.log("Mulai Tulis Komentar");
                                        document.querySelectorAll("[class='native-text']")[ntvb].click()

                                        if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true||ceknamagroup2.includes(namagroup1) == true||ceknamagroup3.includes(namagroup1) == true||ceknamagroup4.includes(namagroup1) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                                            clicksend();
                                            clearInterval(myInterval);


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
                                            clearInterval(myInterval);
                                            location.href = "about:blank"
                                            GM.setValue("DONE", 1);


                                            GM.setValue(namagroup2, keyword[j] + " " + jam[u] );
                                            return;
                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true||ceknamagroup2.includes(namagroup3) == true||ceknamagroup3.includes(namagroup3) == true||ceknamagroup4.includes(namagroup3) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                                            clicksend();
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                                            clearInterval(myInterval);

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
                    continue;
                }
            }
        }

    }
    'use strict';


},refresh * 10)









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
