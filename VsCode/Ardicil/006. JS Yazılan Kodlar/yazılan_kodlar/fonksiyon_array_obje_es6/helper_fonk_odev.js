const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map, filter, reduce, some,every, find

//sayilar dizisindeki tek elemanları bulup başka bir diziye aktarın (filter)
//bu yeni dizinin her bir elemanının karesini alıp basşka bir diziye aktarın (map)
//bu dizideki 10 dan büyük olan elemanların  toplamını ekrana yazdırın. (reduce)

//sayilar dizisini parametre olarak alan tek bir fonksiyon olmalı ve y
//bu fonksiyon geriye sonucu döndürmelidir.

// for ve while döngülerini kullanmak yasaktır :)

function sonucuBul(sayilar) {
    const tekElemanlariIcerenDizi = sayilar.filter(function (sayi) {
        return sayi % 2 !== 0;
    });
    console.log("tek elemanlı dizi" + tekElemanlariIcerenDizi);
    

    const sayilarinKareleri = tekElemanlariIcerenDizi.map(function (sayi) {
        return sayi * sayi;
    });
    console.log("sayıların kareleri " + sayilarinKareleri);
    
    const toplam = sayilarinKareleri.reduce(function (genelToplam, sayi) {
        if (sayi > 10) {
            return genelToplam = genelToplam + sayi;
        } else {
            return genelToplam;
        }
    }, 0);

    return toplam;

}

console.log(sonucuBul(sayilar));

function kisaVersiyon(sayilar) {
    return sayilar.filter(sayi => sayi % 2 !== 0)
        .map(sayi => sayi * sayi)
        .reduce((genelToplam, sayi) => sayi > 10 ? genelToplam += sayi : genelToplam, 0);
}


kisaVersiyon(sayilar);
console.log(kisaVersiyon(sayilar));