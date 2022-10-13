// const myPromise = new Promise((resolve, reject) => {
//     //uzun sürecek işlem buraya yazılır
//     setTimeout(() => {
//         //console.log("3 saniyelik işlem bitti");
//         //resolve("3 saniyelik işlem bitti");
//         //resolve({ ad: 'emre', id: 1 });
//         reject('internete çıkamadım');
//     }, 3000);
// });

// myPromise
//     .then(sonuc => { console.log(sonuc); })
//     .catch(hata => { console.log(hata); });

// function ogrencileriGetir() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dizi = [];

//             for (let i = 0; i < 30; i++){
//                 dizi.push({ad: "öğrenci "+ (i+1), id:i+1})
//             }

//             //resolve(dizi);
//             reject("Hata çıktı");
    
//         }, 2000)
//     })
// }

// function ogrencileriYazdir(dizi) {
//     console.log(dizi);
// }

// ogrencileriGetir()
//     .then(ogrenciDizisi => ogrencileriYazdir(ogrenciDizisi))
//     .catch (hataMesaji => console.log(hataMesaji));

// const promiseBasarili = Promise.resolve("başarılı promise");
// const promiseHata = Promise.reject("hata cıktı")

// promiseBasarili.then(snc => console.log(snc));

// promiseHata
//     .then(sonuc => console.log(sonuc))
//     .catch(hata => console.log(hata));

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("1 saniyelik işlem bitti");
    }, 1000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("6 saniyelik işlem bitti");
    }, 6000);
});

// Promise.all([p2, p1])
//     .then(sonuc => console.log(sonuc));

Promise.race([p1, p2]).then(sonuc => console.log(sonuc));