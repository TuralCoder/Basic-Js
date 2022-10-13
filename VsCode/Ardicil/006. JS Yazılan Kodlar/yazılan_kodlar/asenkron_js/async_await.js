
function getUser(id) {
    console.log(`${id} idli kullanıcının bilgisi getiriliyor`);
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve({ ad: 'emre', id: id });
        }, 2000);
    });
}

function getCourses(userName) {
    console.log(`${userName} isimli kullanıcının kursları getiriliyor`);
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject("kurslar getirilrken hata cıktı");
            resolve(['java', 'js', 'flutter']);
        }, 2000);
    });
}

function getComments(kursAdi) {
    console.log(`${kursAdi} isimli kursun yorumları getiriliyor`);
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("Kurs harika");
        }, 2000);
    });
}

// getUser(12345).then(user => {
//     getCourses(user.ad).then(kurslarDizisi => {
//         getComments(kurslarDizisi[0]).then(yorum => {
//             console.log(yorum);
//         });
//     });
// });

// getUser(1245785)
//     .then(user => getCourses(user.ad))
//     .then(kurslarDizisi => getComments(kurslarDizisi[0]))
//     .then(yorum => console.log(yorum))
//     .catch(hata => console.log("hata cıktı:"+hata));

yorumlariGoster();
async function yorumlariGoster() {
    try {
        const userObje = await getUser(45236);
        const kurslarDizisi = await getCourses(userObje.ad);
        const yorum = await getComments(kurslarDizisi[0]);
        console.log(yorum);
    } catch (err) {
        console.log("hata cıktı"+err);
   }
}

// getCourses('emre').then(kurslarDizisi => {
//     console.log(kurslarDizisi);
// })

