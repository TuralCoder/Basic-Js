//array destructuring
/*
let isim = ['emre', 'altunbilek'];
const ad = isim[0];
const soyad = isim[1];
console.log(ad + " " + soyad);

let [firstName, lastName] = isim
console.log(firstName + " "+lastName);

let [a, b] = 'Emre Altunbilek'.split(' ');
console.log(a);
console.log(b);

let [ilk, , son] = ['sarı', 'mavi', 'beyaz'];
console.log(ilk + "    "+son);

let kisi = {};

[kisi.ad, kisi.soyadi] = 'Emre Altunbilek'.split(' ');
console.log(kisi);


let [ad1, ad2, ...ad3] = ['emre', 'hasan', 'ali', 'ayse', 'fatma'];
console.log(ad3);

let [s1="bilinmiyor", s2="bilinmiyor"] = ['merhaba'];
console.log(s1 + "  "+s2);
*/

//object destructuring
/*
let options = {
    title: undefined,
    width: undefined,
    height: undefined
};
  
let { title="baslık", width="50", height="50" } = options;

console.log(title + " " + width + " " + height);
  
const kisi = {
    ad: 'emre',
    yasi: 32
};

const { ad:isim, yasi:yas } = kisi;
console.log(isim + "  " + yas);

const meslek = "mühendis";
const il = "ankara";

const person = {
     meslek,
    il,
    yas: 32,
     ilce : "batıkent"
}

const { meslek: m, il: i, ...geriKalani } = person;

console.log(geriKalani.ilce);
*/

let kisi = {
    ad: {
        firstName : "emre",
        lastName : "altunbilek"
    },
    sevdigiRenkler: ["sarı", "kırmızı"],
    yas:32
};

const {
    ad: {
        firstName,
        lastName
    },
    sevdigiRenkler: [item1, item2],
    yas
} = kisi;
console.log(`${firstName} ${item2}`);

function kisiyiGoster(isim = "Bilinmiyor", yas = 0, boyu = 180, sevdigiRenkler = []) { 

}

kisiyiGoster("emre", undefined, undefined, ['yesil', 'mavi']);

const parametreler = {
    isim: "emre",
    yas:32,
    sevdigiRenkler : ['yesil', 'mavi']
}

kisiyiGoster2(parametreler);

function kisiyiGoster2({isim ="bilinmiyor", sevdigiRenkler = [], yas=0, boy=0}) { 

    console.log(isim+"  "+ yas);
}









