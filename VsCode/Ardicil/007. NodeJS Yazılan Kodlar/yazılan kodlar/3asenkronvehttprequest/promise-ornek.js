/*console.log("Başladı");
console.log("Bitti");*/

function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log(id + " idli user getiriliyor");
        setTimeout(() => {
            resolve({ id: id, ad: "emre" });
        }, 1500)
    });
}

function getCourse(userName) {
    return new Promise((resolve, reject) => {
        console.log(userName + " kişisinin kursları getirilecek");
        setTimeout(() => {
            resolve(['java', 'flutter', 'kotlin'])
        }, 2000);
    });
}

function getComments(courseName) {
    return new Promise((resolve, reject) => {
        console.log(courseName + " isimli kursun yorumları getiriliyor");
        setTimeout(() => {
            reject("yorumlar getirilrkn hata olustu")
            resolve("harika bir kurs");
        }, 2000);
    });
}

async function yorumGetir() { 

    try {
        const userObj = await getUser(12345);
        const kursDizisi = await getCourse(userObj.ad);
        const yorum = await getComments(kursDizisi[0]);
        console.log(yorum);
    } catch (e) {
        console.log("#####"+e);
        
     }
   
   
}
console.log("11111111111");
yorumGetir();
console.log("22222222222");

/*
getUser(123).then((userObj) => {
    getCourse(userObj.ad).then((kursDizisi) => {
        getComments(kursDizisi[0]).then((yorum) => {
            console.log(yorum);
        })
    })
});

*/

/*
getUser(123)
    .then(userObj => getCourse(userObj.ad))
    .then(kursDizisi => getComments(kursDizisi[0]))
    .then(yorum => console.log(yorum))
    .catch(hata => console.log("hata:"+hata));
*/




