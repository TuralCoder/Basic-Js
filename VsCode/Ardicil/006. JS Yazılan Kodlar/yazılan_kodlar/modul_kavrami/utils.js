export default class Ogrenci{
    constructor(ad, id) {
        this.ad = ad;
        this.id = id;
        this.bilgileriniSoyle();
    }

    bilgileriniSoyle() {
        console.log(`ad: ${this.ad} ve id ${this.id}`);
    }
}

export const PI = 3.14;

export function sayilariTopla(s1, s2) {
    console.log(s1+s2);
}

export  function sayilariCarp(s1,s2) {
    console.log(s1*s2);
}

export function sayilariBol(s1,s2) {
    console.log(s1/s2);
}

function selamVer(adiniz) {
    console.log(`hoşgeldiniz ${adiniz}`);
}

export const test = () => {
    console.log("test");
}

/*
export {
    sayilariTopla,
    sayilariBol,
    selamVer
}*/

