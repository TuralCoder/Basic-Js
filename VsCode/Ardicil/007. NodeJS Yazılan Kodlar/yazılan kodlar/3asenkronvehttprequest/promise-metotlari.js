/*
const promiseBasarili = Promise.resolve("Başarılı bir şekilde promise sonuclandı");
const promiseHata = Promise.reject(new Error('Hata oluştu'));

promiseBasarili.then((sonuc) => console.log(sonuc));

promiseHata
    .then((sonuc) => console.log(sonuc))
    .catch(e => console.log(e));
*/
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p1 5 saniye sonra bitti");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject("p2de hata cıktı");
        resolve("p2 4 saniye sonra bitti");
    }, 4000);
});

const promiseAll = Promise.all([p1, p2]);

promiseAll
    .then(sonuc => console.log(sonuc))
    .catch(e => console.log(e))


const promiseRace = Promise.race([p1, p2]);
promiseRace.then(sonuc => console.log("race :"+ sonuc));
