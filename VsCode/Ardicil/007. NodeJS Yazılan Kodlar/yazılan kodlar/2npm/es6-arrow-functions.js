/*const selamVer = function () { 
    console.log("Merhaba");
}
selamVer();

const selamVerArrowFun = () => { console.log("Merhaba from arrow function");
}

selamVerArrowFun();

const selamVerArrowFunKisaVersiyon = _ =>  console.log("Merhaba from arrow function kısa versiyon"); 

selamVerArrowFunKisaVersiyon();*/

/*
const karesiniAl = function (sayi) {
    return sayi * sayi;
}
console.log(karesiniAl(5));

const karesiniAlArrowFunction = (sayi) => { return sayi * sayi;}
console.log(karesiniAlArrowFunction(6));

const karesiniAlArrowFunction2 = sayi => { return sayi * sayi;}
console.log(karesiniAlArrowFunction2(7));

const karesiniAlArrowFunction3 = sayi =>  sayi * sayi;
console.log(karesiniAlArrowFunction3(8));
*/
/*
const test = function () { 
    console.log(this);
}
test();

const testArrowFunction =  () => { 
    console.log(this);
}
testArrowFunction();
*/
/*
const person = {
    ad: "emre altunbilek",
    sevdigiRenkler: ['mavi', 'yesil'],
    bilgileriGoster: function () { 
        console.log(this);
        const obje = this;
        this.sevdigiRenkler.forEach(function (renk) { 
            console.log(obje.ad + " ın sevdiği renkler" + renk);
        })
    },
}
person.bilgileriGoster();*/

const person2 = {
    ad: "emre altunbilek",
    sevdigiRenkler: ['mavi', 'yesil'],
    bilgileriGoster(){ 
        console.log(this.ad); 
        this.sevdigiRenkler.forEach((renk)=> { 
            console.log(this.ad + " ın sevdiği renkler" + renk);
        })
    }
}
person2.bilgileriGoster();



