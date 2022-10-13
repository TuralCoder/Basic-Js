const myModule = require('./module-nedir');
const pcInfo = require('./pc_info')

function selamVer() {
    console.log("Merhaba Node JS");
    //console.log(window);
    global.console.log("bu yazı global nesnesinden geldi");
    //console.log(isim);
}

selamVer();
console.log(myModule.ad2);
myModule.ekle2(5,10);
myModule.cikar(52, 42);
console.log(myModule.personel.yas);

pcInfo.pcInfo();





