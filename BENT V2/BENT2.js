// ==UserScript==
// @name         NEW BENT2
// @namespace    http://tampermonkey.net/
// @version      3.82
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/BENT%20V2/BENT2.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/BENT%20V2/BENT2.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==


var refresh = 90;



var namagroup1 = 'KEPALA';
var Comment1 = '#IYATOTO BIMBO91 36*25*26'; 

var namagroup2 = 'ANGKER';
var Comment2 = 'ANGKER4D=BINOMO77=40*66*43'; 

var namagroup3 = 'JNE';
var Comment3 = '#JNETOTO(BINAKARMA54)*54*30*60'; 

var namagroup4 = 'G∆IB4D';
var Comment4 = 'GAIB4D=BISMON76=51*42*24'; 

var namagroup5 = 'TOYIBSLOT';
var Comment5 = '#TOYIBSLOT ( BABIBU76 ) : 72*35*84'; 

var namagroup6 = 'TiktakTogel';
var Comment6 = '#Tiktaktogel / BOBOHO55 / 72 , 35 , 84'; 

var namagroup7 = 'ASEP';
var Comment7 = '#ASEPTOGEL BAMIN12 04*10*41'; 

var namagroup8 = 'BOCORAN PREDIKSI SDY';
var Comment8 = '#TOGELKUY BERIKLAH65 02*21*17'; 

var namagroup9 = 'SHIOKELINCI';
var Comment9 = '#shiokelinci4d*BENTOEL12*04*10'; 

var namagroup10 = 'GIL∆4D';
var Comment10 = 'GILA4D=BEKOL12=51*42*24'; 

var namagroup11 = 'KEITOGEL';
var Comment11 = '#keitogel = (BINAKARMA54) = 36*25*26'; 

var namagroup12 = 'KIOSTOTO';
var Comment12 = 'KIOSTOTO=BAMIN12=63*76*37'; 

var namagroup13 = 'T_O_T_O_A_K_U_R_A_T';
var Comment13 = '#TA*BERANAK76*54*30*60*'; 

var namagroup14 = 'DENTOTO';
var Comment14 = '#DENTOTO 63*76*37 ( BIKANG12 )'; 

var namagroup15 = '12312312';
var Comment15 = ''; 

var namagroup16 = '1231231';
var Comment16 = '';



/*======================================================================3D===============================================================*/
var namagroup17 = 'TESLATOTO';
var Comment17 = '#TESLATOTO/BINAKARMA54/652*375*923'; 

var namagroup18 = 'CIKA';
var Comment18 = '#CIKA4D*POTANGINA*760*623*691'; 

var namagroup19 = 'D_E_T_I_K';
var Comment19 = '#DETIKTOTO*PANDAL93*078*981*317'; 

var namagroup20 = 'PAO4D';
var Comment20 = '#PAO4D (BINAKARMA54) = 400*332*842'; 

var namagroup21 = 'ALJT';
var Comment21 = '#JALUR*PALAKU63*095*761*686'; 

var namagroup22 = 'TOGEL838';
var Comment22 = 'TOGEL838 (BERANAK76) = 421*236*865'; 

var namagroup23 = 'ABUT0G3L';
var Comment23 = '#ABUTOGEL*POGO19*183*747*979'; 

var namagroup24 = 'OTUSLOT';
var Comment24 = '#OTUSLOT*BERANAK76*321*022*BETTING'; 

var namagroup25 = 'JOGJATOTO';
var Comment25 = '#(JOGJATOTO)=PANDAL93*991*087*697'; 

var namagroup26 = 'LING77';
var Comment26 = '#LINGTOGEL77*BIKANG12*073*596*003'; 

var namagroup27 = 'AL3XISTOG3L';
var Comment27 = '#ALEXISTOGEL(BONANSA67) 3D = 718*828*418'; 

var namagroup28 = 'Kiutoto';
var Comment28 = '#KIUTOTO (BINAKARMA54) : 751*389*494'; 

var namagroup29 = 'AKIRA';
var Comment29 = '#AKIRATOTO*POGO19*946*044*288'; 

var namagroup30 = 'PORTOGEL';
var Comment30 = '#PORTOGEL (BABIBU76) = 517*226*970'; 

var namagroup31 = 'YOGA';
var Comment31 = 'BERANAK76 # 303/127/917 #YOGAPRO'; 

var namagroup32 = 'BBFSTOTO';
var Comment32 = '#BBFSTOTO = (POLITAS) = 821*733*080';



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
