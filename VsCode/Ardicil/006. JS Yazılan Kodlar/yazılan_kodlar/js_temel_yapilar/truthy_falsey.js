//truthy falsey
//FALSE, 0 , "", null, undefined, NaN FALSEY diğer herşey truty
let yas = 32;
yas = 0;

let isim = "emre";
isim = '';
isim = null;
isim = undefined;

let dogumYili = 1988;
dogumYili = "emre";
//emre99

if (dogumYili * 99) {
    console.log("bu true ifadedir");
} else {
    console.log("bu false ifadedir");
}
