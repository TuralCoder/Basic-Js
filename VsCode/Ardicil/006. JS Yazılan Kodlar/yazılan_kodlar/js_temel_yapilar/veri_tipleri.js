//Aslında 2 tip veri türü vardır.
//Primitive ve Referans Veri Türleri

//Primitive tipler : Number, String, Boolean, Undefined, Null, Symbol
//Referans tipler : Object


//Number : tamsayı, negatif sayı ve ondalıklı ifadeleri saklarken kullanırız
let sayi = 50;
console.log(sayi);
console.log(typeof sayi);

let ondalikSayi = 25.545;
console.log(ondalikSayi);
console.log(typeof ondalikSayi);


let negatifSayi = -25;
console.log(negatifSayi);
console.log(typeof negatifSayi);

//String:metinsel ifadeler için kullanılır
//Çift veya tek tırnak ile oluşturulabilir.
let isim = "Emre";
let soyIsim = 'Altunbilek';

//kaçış karakteri
let cumle = 'Emre\'nin Bilgisayarı';
let cumle2 = "Emre'nin Bilgisayarı";
console.log(cumle);


//String ifadeleri birleştirirken + işareti kullanılır
let tamIsim = isim + ' ' + soyIsim;

//template literal - backtick
//Bu yapı ile de string birleştirme yapılabilir.
let tamIsim2 = `${isim} ${soyIsim}`
console.log("template literal : " + tamIsim2);
console.log(`template literal ile yazdır ${tamIsim2}`);

console.log(tamIsim);
console.log(isim);
console.log(typeof isim);

//Boolean : true veya false değer alabilen veri türüdür.
let asalSayiMi = true;
console.log("Veri türümüzün değeri " + asalSayiMi + " veri tipi:" + typeof asalSayiMi);
console.log(`Veri türümüzün değeri ${asalSayiMi} veritipi : ${typeof asalSayiMi}`);

//undefined : Henüz değer ataması yapılmamış değişkenleri ifade eder
let renk;
renk = "Yeşil"
console.log(renk);
console.log(typeof renk);

//null : JS dünyasında null hiç bir şeydir. 
let yas = null; 
console.log("değer :"  + yas + " veri tipi:" + typeof yas);