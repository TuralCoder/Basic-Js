//SORU 1
//sehirler diye bir dizi olusturun
//her dizi elemanı sehirler ile ilgili bilgiler içermelidir
//bu bilgiler shrin adı, plaka numarası ve sehrin komsuları olabilir

//diziyi olusturduktan sonra sehir adlarına göre zden aya sıralayıp ekrana yazdırın

//CEVAP 1
// const sehirler = [
//     { ad: 'Bursa', plakaKod: 16, komsu: ['Istanbul', 'Balıkesir'] },
//     { ad: 'Izmir', plakaKod: 35, komsu: ['Manisa', 'Aydın'] },
//     { ad: 'Ankara', plakaKod: 6, komsu: ['Kırıkkale', 'Eskisehir'] },  
// ];

// sehirler.sort(function (a, b) {
//     if (a.ad < b.ad) {
//         return 1;
//     } else if (a.ad > b.ad) {
//         return -1;
//     }else return 0;
// });

// console.log(sehirler);



//SORU 2 
//kullanıcıdan alınan değere kadar olan sayılar dizisini fibonacci seklinde yazdırın
//fibonacci örnek 0 1 1 2 3 5 8 13 21...
//iki sayının toplamı bir sonraki sayıyı olusturuyor...

//CEVAP 2
// function fibonacci(sayi) { 
//     let sonucDizi = [0, 1];

//     for (let i = 2; i < sayi; i++){
//         const oanHesaplananEleman = sonucDizi[i - 1] + sonucDizi[i - 2];
//         if (oanHesaplananEleman < sayi) {
//             sonucDizi[i] = oanHesaplananEleman;
//         } else {
//             break;
//         }
//     }
//     return sonucDizi;
// }

// console.log(fibonacci(500));




//SORU 3
//ogrencileri tutan bir dizi olusturun
//her bir ogrenci nesnesinde ad, soyad ve id değerleri olmalı
//id numarası çift olan öğrencilerin adı ve soyadını birleştirilmiş halde tutan diziyi 
//adan zye sıralı sekilde ekrana yazdırınız
//bunları yaparken map filter sort metotlarını kullanın
//işlem bittikten sonra kodları arrow function ve zincirleme haline dönüştürün

const ogrencilerDizisi = [
    { ad: 'emre', soyad: 'altunbilek', id: 1 },
    { ad: 'hasan', soyad: 'asd', id: 2 },
    { ad: 'kemal', soyad: 'asd', id: 14 },
    { ad: 'ali', soyad: 'wdd', id: 7 },
    { ad: 'can', soyad: 'cddda', id: 5 },
    { ad: 'cem', soyad: 'bgd', id: 6 },
    { ad: 'ahmet', soyad: 'bgd', id: 92 },
    { ad: 'su', soyad: 'asd', id: 3 },
];

const sonucDizi = ogrencilerDizisi.filter(ogrenci => ogrenci.id % 2 === 0)
    .map(ogrenci => ogrenci.ad + " " + ogrenci.soyad)
    .sort()
    .reverse();
    console.log(sonucDizi);


// const idNoCiftOlanOgrencilerDizisi = ogrencilerDizisi.filter(function (ogrenci) {
//     return ogrenci.id % 2 === 0;
// });

// const isimler = idNoCiftOlanOgrencilerDizisi.map(function (ogrenci) {
//     return ogrenci.ad + " " + ogrenci.soyad;
// })

// isimler.sort();

// console.log(isimler);



