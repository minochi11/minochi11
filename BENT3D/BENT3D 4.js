// ==UserScript==
// @name         BENT3D 4
// @namespace    BENT3D 4
// @version      0.8
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/minochi11/minochi11/main/BENT3D/BENT3D%204.js
// @downloadURL  https://raw.githubusercontent.com/minochi11/minochi11/main/BENT3D/BENT3D%204.js
// @author       me
// @run-at       document-body
// @match        http*://*/*
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==




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



var namaadmin = [];



var namagroup1 = 'BMWGROUP';
var Comment1 = 'FALS4D/BAGUSAN17*473*726*185'; 

var namagroup2 = 'Situstogel88';
var Comment2 = '#SITUSTOGEL88 ( BLOOMTO92 ) : 323*976*841'; 

var namagroup3 = 'NONSTOPGROUP';
var Comment3 = '( #LOMBA3DBADUT4D BASAHAN16 : 581 , 203 , 554 )'; 

var namagroup4 = 'LOTTE4D';
var Comment4 = '#LOTTE4D ( DUDUKGO81 ) : 860*881*576'; 

var namagroup5 = 'OBI9';
var Comment5 = '#OBI9*BALUNGAN1*021*106*487*'; 

var namagroup6 = 'TOGEL838';
var Comment6 = '#TOGEL838 (DJASKAL12) = 377*251*627'; 

var namagroup7 = 'DADU4D';
var Comment7 = '#DADU4D (857*158*422) BOTONA27'; 

var namagroup8 = 'CPGTOTO';
var Comment8 = '#CPGTOTO ( DJASKAL12 ) : 302*352*339'; 

var namagroup9 = 'DETIKGROUP';
var Comment9 = '#DETIKTOTO*BORLITA19*862*449*679'; 

var namagroup10 = 'LINGTOGEL77';
var Comment10 = '#LINGTOGEL77*DINDAKUCING*493*912*282'; 

var namagroup11 = 'AHHA4D';
var Comment11 = '( #ASHIAAAP DICIAKKUCING : 762 , 985 , 541 )'; 

var namagroup12 = 'GTA';
var Comment12 = '#GTATOGEL {DUDUKGO81} = 704*006*511'; 

var namagroup13 = 'CAPTOGEL';
var Comment13 = '#CAPTOGEL (BOKIKAN)=*472*004*149'; 

var namagroup14 = 'OLBTOTO';
var Comment14 = '#OLBTOTO(BALUNGAN1)*433*876*051'; 

var namagroup15 = 'BROMOTOTO';
var Comment15 = 'BOLER19 # 880/367/535 #YOGAPRO'; 

var namagroup16 = 'PAKDE4D';
var Comment16 = 'PAKDE4D ( BONES17 ) : 640*173*183';












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

    var ia = document.getElementById('m_group_stories_container');
    if (ia) {
    var g = ia.getElementsByTagName("article")[0];
    var postingan = g.getElementsByTagName('span')[2].textContent;
    var postingan1 = postingan.toLowerCase();
    if (postingan1) {

        return;
    }
    }

var dtsg = document.querySelector("input[name='fb_dtsg']").value
var jazoest = document.querySelector("input[name='jazoest']").value
var docuril = document.querySelector("[method='post']").action
var details1 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment1 };
    var details2 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment2 };
    var details3 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment3 };
    var details4 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment4 };
    var details5 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment5 };
    var details6 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment6 };
    var details7 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment7 };
    var details8 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment8 };
    var details9 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment9 };
    var details10 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment10 };
    var details11 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment11 };
    var details12 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment12 };
    var details13 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment13 };
    var details14 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment14 };
    var details15 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment15 };
    var details16 = {'jazoest':jazoest,'fb_dtsg':dtsg,'comment_text':Comment16 };
var formBody = [];

if(typeof jazoest === 'undefined' || typeof dtsg === 'undefined'){
    window.location.reload();
    return;
}


    var gtact = document.getElementsByTagName('h3');
    if (gtact.length > 0){
        for (var lke = 0; lke < gtact.length; lke++) {
            if (gtact[lke].textContent == "Pengumuman" || gtact[lke].textContent == "Aktivitas Terbaru") {
                return;
            }
        }
    }

     var aTags1 = document.getElementsByTagName("a");

    for (var i = 0; i < aTags1.length; i++) {
var aldro = aTags1[i].textContent.toLocaleUpperCase();
        /*comment1*/
        if (aldro.includes(namagroup1.toLocaleUpperCase()) == true) {
            for (var property1 in details1) {
                    var encodedKey1 = encodeURIComponent(property1);
                    var encodedValue1 = encodeURIComponent(details1[property1]);
                    formBody.push(encodedKey1 + "=" + encodedValue1);
                }
                formBody = formBody.join("&");
            if (id1 == "" || id1 == undefined || id1 == null ||id1 == "0") {
                 GM.setValue( 1,1);

                /*star*/
                fetch(docuril , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                        'Sec-Fetch-Site' : 'same-origin',
                    },
                    body: formBody
                })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }

            }


        /*comment2*/
        if (aldro.includes(namagroup2.toLocaleUpperCase()) == true) {
            for (var property2 in details2) {
                    var encodedKey2 = encodeURIComponent(property2);
                    var encodedValue2 = encodeURIComponent(details2[property2]);
                    formBody.push(encodedKey2 + "=" + encodedValue2);
                }
                formBody = formBody.join("&");
            if (id2 == "" || id2 == undefined || id2 == null ||id2 == "0") {
                GM.setValue( 2,1);
                   /*star*/
                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                  alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment3*/
        if (aldro.includes(namagroup3.toLocaleUpperCase()) == true) {
            for (var property3 in details3) {
                var encodedKey3 = encodeURIComponent(property3);
                var encodedValue3 = encodeURIComponent(details3[property3]);
                formBody.push(encodedKey3 + "=" + encodedValue3);
            }
            formBody = formBody.join("&");
            if (id3 == "" || id3 == undefined || id3 == null ||id3 == "0") {
                GM.setValue( 3,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }


        /*comment4*/
        if (aldro.includes(namagroup4.toLocaleUpperCase()) == true) {
            for (var property4 in details4) {
                var encodedKey4 = encodeURIComponent(property4);
                var encodedValue4 = encodeURIComponent(details4[property4]);
                formBody.push(encodedKey4 + "=" + encodedValue4);
            }
            formBody = formBody.join("&");
            if (id4 == "" || id4 == undefined || id4 == null ||id4 == "0") {
                GM.setValue( 4,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })

                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment5*/
        if (aldro.includes(namagroup5.toLocaleUpperCase()) == true) {
            if (id5 == "" || id5 == undefined || id5 == null ||id5 == "0") {
                GM.setValue( 5,1);
                   /*star*/
                  for (var property5 in details5) {
                    var encodedKey5 = encodeURIComponent(property5);
                    var encodedValue5 = encodeURIComponent(details5[property5]);
                    formBody.push(encodedKey5 + "=" + encodedValue5);
                }
                formBody = formBody.join("&");
                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })

                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }


        /*comment6*/
        if (aldro.includes(namagroup6.toLocaleUpperCase()) == true) {
            for (var property6 in details6) {
                    var encodedKey6 = encodeURIComponent(property6);
                    var encodedValue6 = encodeURIComponent(details6[property6]);
                    formBody.push(encodedKey6 + "=" + encodedValue6);
                }
                formBody = formBody.join("&");
            if (id6 == "" || id6 == undefined || id6 == null ||id6 == "0") {
                GM.setValue( 6,1);
                   /*star*/
                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*coment7*/
        if (aldro.includes(namagroup7.toLocaleUpperCase()) == true) {
            for (var property7 in details7) {
                    var encodedKey7 = encodeURIComponent(property7);
                    var encodedValue7 = encodeURIComponent(details7[property7]);
                    formBody.push(encodedKey7 + "=" + encodedValue7);
                }
                formBody = formBody.join("&");
            if (id7 == "" || id7 == undefined || id7 == null ||id7 == "0") {
                GM.setValue( 7,1);
                   /*star*/
                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment8*/
        if (aldro.includes(namagroup8.toLocaleUpperCase()) == true) {
            for (var property8 in details8) {
                    var encodedKey8 = encodeURIComponent(property8);
                    var encodedValue8 = encodeURIComponent(details8[property8]);
                    formBody.push(encodedKey8 + "=" + encodedValue8);
                }
                formBody = formBody.join("&");
            if (id8 == "" || id8 == undefined || id8 == null ||id8 == "0") {
                GM.setValue( 8,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment9*/
        if (aldro.includes(namagroup9.toLocaleUpperCase()) == true) {
            for (var property9 in details9) {
                var encodedKey9 = encodeURIComponent(property9);
                var encodedValue9 = encodeURIComponent(details9[property9]);
                formBody.push(encodedKey9 + "=" + encodedValue9);
            }
            formBody = formBody.join("&");
            if (id9 == "" || id9 == undefined || id9 == null ||id9 == "0") {
                GM.setValue( 9,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment10*/
        if (aldro.includes(namagroup10.toLocaleUpperCase()) == true) {
            for (var property10 in details10) {
                    var encodedKey10 = encodeURIComponent(property10);
                    var encodedValue10 = encodeURIComponent(details10[property10]);
                    formBody.push(encodedKey10 + "=" + encodedValue10);
                }
                formBody = formBody.join("&");
            if (id10 == "" || id10 == undefined || id10 == null ||id10 == "0") {
                GM.setValue( 10,1);
                   /*star*/
                fetch(docuril , {
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment11*/
        if (aldro.includes(namagroup11.toLocaleUpperCase()) == true) {
            for (var property11 in details11) {
                var encodedKey11= encodeURIComponent(property11);
                var encodedValue11 = encodeURIComponent(details11[property11]);
                formBody.push(encodedKey11 + "=" + encodedValue11);
            }
            formBody = formBody.join("&");
           if (id11 == "" || id11 == undefined || id11 == null ||id11 == "0") {
               GM.setValue(11,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment12*/
            if (aldro.includes(namagroup12.toLocaleUpperCase()) == true) {
                for (var property12 in details12) {
                    var encodedKey12 = encodeURIComponent(property12);
                    var encodedValue12 = encodeURIComponent(details12[property12]);
                    formBody.push(encodedKey12+ "=" + encodedValue12);
                }
                formBody = formBody.join("&");
           if (id12 == "" || id12 == undefined || id12 == null ||id12 == "0") {
               GM.setValue(12,1);
                   /*star*/
                    ;
                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment13*/
            if (aldro.includes(namagroup13.toLocaleUpperCase()) == true) {
          if (id13 == "" || id13 == undefined || id13 == null ||id13 == "0") {
              GM.setValue(13,1);
                   /*star*/
                    for (var property13 in details13) {
                    var encodedKey13 = encodeURIComponent(property13);
                    var encodedValue13 = encodeURIComponent(details13[property13]);
                    formBody.push(encodedKey13 + "=" + encodedValue13);
                }
                formBody = formBody.join("&");
                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment14*/
        if (aldro.includes(namagroup14.toLocaleUpperCase()) == true) {
            for (var property14 in details14) {
                    var encodedKey14 = encodeURIComponent(property14);
                    var encodedValue14 = encodeURIComponent(details14[property14]);
                    formBody.push(encodedKey14 + "=" + encodedValue14);
                }
                formBody = formBody.join("&");
           if (id14 == "" || id14 == undefined || id14 == null ||id14 == "0") {
               GM.setValue(14,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment15*/
        if (aldro.includes(namagroup15.toLocaleUpperCase()) == true) {
            for (var property15 in details15) {
                    var encodedKey15 = encodeURIComponent(property15);
                    var encodedValue15 = encodeURIComponent(details15[property15]);
                    formBody.push(encodedKey15 + "=" + encodedValue15);
                }
                formBody = formBody.join("&");
            if (id15 == "" || id15 == undefined || id15 == null ||id15 == "0") {
                GM.setValue(15,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }

        /*comment16*/
        if (aldro.includes(namagroup16.toLocaleUpperCase()) == true) {
            for (var property16 in details16) {
                    var encodedKey16 = encodeURIComponent(property16);
                    var encodedValue16 = encodeURIComponent(details16[property16]);
                    formBody.push(encodedKey16 + "=" + encodedValue16);
                }
                formBody = formBody.join("&");
            if (id16 == "" || id16 == undefined || id16 == null ||id16 == "0") {
                GM.setValue(16,1);
                   /*star*/

                    fetch(docuril , {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
                            'Sec-Fetch-Site' : 'same-origin',
                        },
                        body: formBody
                    })
                alert("Done");
                /*end*/
                } else{
                    window.close();
                    location.href = "about:blank"
                }
            }
        }
}, 10)




