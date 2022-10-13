function selamVer(){
    console.log("merhaba");
}

selamVer();

const selamVerDegisken = function () {
    console.log("merhaba selamVerDegisken");
}

selamVerDegisken();

const fatArrow = _ => {
    console.log("merhaba fatarrow");
}
fatArrow();

function karesiniAl(sayi) {
    return sayi * sayi;
}

const karesiniAlDegisken = function (sayi) {
    return sayi * sayi;
}
console.log(karesiniAl(5));
console.log(karesiniAlDegisken(7));

const fatArrowParametreli = (sayi) => {
    return sayi * sayi;
};

console.log(fatArrowParametreli(8));

const fatArrowParametreliKisa = sayi => sayi * sayi;

console.log(fatArrowParametreliKisa(9));

const sayilariTopla = (s1, s2) => s1 + s2;

const sayilariTopla2 = (s1, s2) => {
    return s1 + s2;
}

const sayilariTopla3 = function (s1, s2) {
    return s1 + s2;
}

console.log(sayilariTopla(5,10));