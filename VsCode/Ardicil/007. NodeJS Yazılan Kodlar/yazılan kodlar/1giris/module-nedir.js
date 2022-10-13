//JS bazı yapılara direk erişip kullanabiliriz. Bunlara global objects denir.
//console, settimeout, cleartimeout, setinterval, clearinterval gibi..

//browserdaki js'de tüm değişkenleri fonksiyonları ekranı barındıran window isimli global bir nesnemiz vardı. window.console_log
//bu yapının node'da bir tanımı yoktur. karşılığı ise global'dir

//node js uygulamalarında her bir js dosyası bir module'dür. Bu modulde tanımlanan tüm değişken ve fonksiyonlar bu dosyaya özeldir.
//Yani private, bunları erişebilir yapmak bizim elimizde.. 

//console.log(module) // ilgili dosyayla ilgili tüm detaylar

let isim = "emre altunbilek";
let topla= function (a, b) {
    console.log(a + b);
}

exports.ad2 = isim;
exports.ekle2 = topla;
exports.cikar = function (a, b) { 
    console.log(a-b);
}
exports.personel = {
    'ad': "emre",
    'yas' : 32
}
console.log(module);

