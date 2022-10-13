/*Soru 8:
Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.
x>0, y<0 ise f(x,y) = 4x+2y+4
x>0, y=0 ise f(x,y) = 2x-y+3
x<0, y>0 ise f(x,y) = 3x+4y+3*/

let xDegeri = parseInt(prompt("x değerini giriniz", "1"));
let yDegeri = parseInt(prompt("y değerini giriniz", "1"));

let islemSonucu = 0;

if (xDegeri > 0 && yDegeri < 0) {

    islemSonucu = 4 * xDegeri + 2 * yDegeri + 4;

} else if (xDegeri > 0 && yDegeri == 0) {
    islemSonucu = 2 * xDegeri - yDegeri + 3;
} else if (xDegeri < 0 && yDegeri > 0) {
    islemSonucu = 3 * xDegeri + 4 * yDegeri + 3;
}
console.log(`x: ${xDegeri} y:${yDegeri} ve sonuc : ${islemSonucu}`);




//Soru 9:  100lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.

let yuzlukSistemdekiNot = parseInt(prompt("Notunuzu giriniz", "50"));
let notSiniri = parseInt(yuzlukSistemdekiNot / 10);
console.log("Yuzluk sistemdeki not:" + yuzlukSistemdekiNot + " sınır :" + notSiniri);


if (yuzlukSistemdekiNot == 100) {
    notSiniri = 9;
}

switch (notSiniri) {
    case 10: console.log("Notunuz AA"); break;
    case 9: console.log("Notunuz AA"); break;
    case 8: console.log("Notunuz BA"); break;
    case 7: console.log("Notunuz BB"); break;
    case 6: console.log("Notunuz CB"); break;
    case 5: console.log("Notunuz CC"); break;
    default: console.log("Notunuz CCden düşük");
}



//Soru 10: Çarpım tablosunu oluşturan bir uygulama yazınız.
let yazdirilacakMetin = "";
for (let i = 1; i <= 10; i++) {


    for (let j = 1; j <= 10; j++) {

        yazdirilacakMetin = yazdirilacakMetin + (i + "*" + j + "=" + (i * j)) + "\t";

    }

    console.log(yazdirilacakMetin);
    yazdirilacakMetin = "";


}