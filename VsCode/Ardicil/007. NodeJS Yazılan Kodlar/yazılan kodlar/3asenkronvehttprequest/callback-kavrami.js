console.log("Program başladı");

getUser(12345, useriGetir);

function useriGetir(userObject) { 
    getCourse(userObject.ad, kurslariGoster);
}

function kurslariGoster(kursDizisi) { 
    getComments(kursDizisi[0], yorumGoster);
}

function yorumGoster(yorum) { 
    console.log(yorum);
}


console.log("Program bitti");


function getUser(id, callback) {
    console.log(id + " idli user getiriliyor");
    setTimeout(() => {
        callback({ id: id, ad: "emre" });
    }, 1500)
}

function getCourse(userName, callback) {
    console.log(userName + " kişisinin kursları getirilecek");
    setTimeout(() => {

        callback(['java', 'flutter', 'kotlin'])
    }, 2000);
}

function getComments(kursAdi, callback) {

    console.log(kursAdi + " isimli kursun yorumları getiriliyor");
    setTimeout(() => {
        callback("harika bir kurs");
    }, 2000);

}

/*senkron
console.log("Program başladı");
const user = getUser(123);
const kurs = getCourse(user);
const yorum = getComments(kurs[0]);
console.log("Program bitti");*/