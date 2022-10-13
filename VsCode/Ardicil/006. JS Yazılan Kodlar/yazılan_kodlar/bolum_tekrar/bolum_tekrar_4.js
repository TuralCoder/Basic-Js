/*Soru 11:
Sıcak soguk oyunu yapalım. Sistem 100e kadar bir sayı üretsin. Kullanıcı bu sayıyı tahmin etmeye çalışsın. Kullanıcının girdiği değere göre kullanıcıyı arttır azalt diyerek uyaralım. Kullanıcı sayıyı bulana kadar tahmin istemeye devam edelim ve sayıyı buldugunda kaç denemeden sonra bulduğunu belirtelim.*/

let uretilenSayi = parseInt(Math.random() * 101);
console.log("Üretilen sayı:" + uretilenSayi);

let tahmin = -1;
let tahminSayisi = 0;

while (tahmin != uretilenSayi) {

    tahmin = parseInt(prompt("Bir sayı giriniz"));
    tahminSayisi++;

    if (tahmin == uretilenSayi) {
        console.log("Tebrikler " + tahminSayisi + " seferde " + "bildiniz");
    } else if (tahmin < uretilenSayi) {
        console.log("Biraz daha çık");
    } else {
        console.log("Biraz daha in");
    }
}



/*
SORU 12:
Kullanıcıdan sürekli olarak sayı alan ve de kullanıcı 0a bastığında girdiği sayıların çarpımını sonuç olarak gösteren programı yazınız.*/

let girilenSayi = parseInt(prompt("Bir sayı giriniz"));
let carpimSonucu = 1;

while (girilenSayi != 0) {
    carpimSonucu = carpimSonucu * girilenSayi;
    girilenSayi = parseInt(prompt("Bir sayı giriniz"));
}
console.log("Çarpım sonucu :" + carpimSonucu);





/* SORU 13:
Kullanıcıdan aldığınız iki tamsayı değerin en büyük ortak bölenini bulan uygulamayı yazınız Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır. */

let sayi1 = parseInt(prompt("Birinci sayıyı giriniz"));
let sayi2 = parseInt(prompt("Ikinci sayıyı giriniz"));

let ebob = 1, kontrol = 2;
//10 - 4
while (kontrol <= sayi1 && kontrol <= sayi2) {
    if (sayi1 % kontrol == 0 && sayi2 % kontrol == 0) {
        ebob = kontrol;
    }
    kontrol++;
}

if (ebob == 1) {
    console.log("Bu sayılar aralarında asaldır");

} else {

    console.log("Bu sayıların ortak böleni : " + ebob);

}

