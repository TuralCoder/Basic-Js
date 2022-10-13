const myPromise = new Promise((resolve, reject) => {
    console.log("3 saniyelik işlem başladı");

    setTimeout(() => {
        console.log("İşlem bitti");
        reject("Hata çıktı");
        resolve("İşlem sonucu burada");
    }, 3000);

});

myPromise.then((sonuc) => {
    console.log(sonuc);
}).catch((err) => {
    console.log("HATAAAAAAAAAAAA:" +err);
});