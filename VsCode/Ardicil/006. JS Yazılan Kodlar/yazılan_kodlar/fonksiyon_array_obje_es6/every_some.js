const sayilar = [1, 2, 3, 4, 5, 6];

const sonuc = sayilar.every(function (sayi) {
    return sayi < 10;
});

const sonucSome = sayilar.some(function (sayi) {
    return sayi > 10;
});

console.log(sonuc);
console.log(sonucSome);