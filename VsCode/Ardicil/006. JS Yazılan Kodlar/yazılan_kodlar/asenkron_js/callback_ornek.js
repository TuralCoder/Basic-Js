console.log("basladı");

//ogrencileriGetir(ogrencileriYazdir);

ogrencileriGetir(function (ogrenciDizisi) {
    console.log(ogrenciDizisi);
});





console.log("bitti");

function ogrencileriGetir(callback) {
    
    setTimeout(function () { 
        const dizi = [];

        for (let i = 0; i < 30; i++){
            dizi.push({ad: "öğrenci "+ (i+1), id:i+1})
        }

        callback(dizi);
    }, 3000);
}

function ogrencileriYazdir(ogrencilerDizisi) {
    console.log(ogrencilerDizisi);
}


