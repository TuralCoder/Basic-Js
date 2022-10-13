//Soru1 Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız

let birinciSayi = parseInt(prompt("Birinci sayıyı giriniz", "1"));
let ikinciSayi = parseInt(prompt("İkinci Sayıyı giriniz", "1"));//
let ucuncuSayi = parseInt(prompt("ucuncuSayi Sayıyı giriniz", "1"));//

let ortalama = (birinciSayi + ikinciSayi + ucuncuSayi) / 3;
alert("Girdiğiniz sayıların ortalaması :" + ortalama);*/

//Soru2 Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulamayı yazınız.

let birinciKenar = parseInt(prompt("Birinci kenarı giriniz", "4"));
let ikinciKenar = parseInt(prompt("ikinciKenar kenarı giriniz", "4"));
let ucuncuKenar = parseInt(prompt("ucuncuKenar kenarı giriniz", "4"));

if ((birinciKenar == ikinciKenar) && (birinciKenar == ucuncuKenar)) {
    alert("Bu bir eşkenar üçgendir");
} else if (birinciKenar != ikinciKenar && birinciKenar != ucuncuKenar && ikinciKenar != ucuncuKenar) {
    alert("Bu bir çeşit kenar üçgendir");
} else { 
    alert("Bu bir ikiz kenar üçgendir");
}

//Soru 3 Klavyeden girilen vize ve final notlarınına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.(Geçme notu : 50, vizenin %40ı, finalin %60ı geçerlidir.)

let vizeNotu = parseInt(prompt("Vize notunu giriniz", "50"));
let finalNotu = parseInt(prompt("Final notunu giriniz", "50"));

let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;

if (ortalama >= 50) {
    alert("Tebrikler dersi geçtiniz ortalamanız :" + ortalama);
} else { 
    alert("Malesef kaldınız ortalamanız :" + ortalama);
}