//SORU4 Kendi adınızı ekrana 5 kere yazdıran uygulamayı tüm döngülerle yapınız.

//for
for (let i = 0; i < 5; i++) {
    console.log((i + 1) + " Emre Altunbilek");
}

//while
let sayac1 = 0;
while (sayac1 < 5) {
    console.log((sayac1 + 1) + " Emre Altunbilek While");
    sayac1++;
}
//do while
let sayac2 = 0;
do {
    console.log((sayac2 + 1) + " Emre Altunbilek Do While");
    sayac2++;
} while (sayac2 < 5);




//SORU5 1’den 100’e kadar olan sayıların toplamını bulan uygulamayı yazınız.

let toplam = 0;
for (let i = 1; i < 100; i++) {
    toplam = toplam + i;
    // toplam += i;
}
console.log("1den 100e kadar olan sayıların toplamı :" + toplam);




//SORU6 1’den 10a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız.

let yazdirilacakMetin = "";
for (let i = 1; i <= 10; i++) {
    if (i != 10) {
        yazdirilacakMetin = yazdirilacakMetin + i + ", ";
    } else {
        yazdirilacakMetin = yazdirilacakMetin + i;
    }
}
console.log(yazdirilacakMetin);

//Soru 7: Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız.
let sayi = parseInt(prompt("Faktoriyeli hesaplanacak sayıyı giriniz", "10"));
let faktoriyel = 1;

for (let i = 1; i <= sayi; i++) {
    faktoriyel = faktoriyel * i;
}
console.log(`Girdiğiniz ${sayi} sayısının faktoriyeli ${faktoriyel} sayısıdır`);
