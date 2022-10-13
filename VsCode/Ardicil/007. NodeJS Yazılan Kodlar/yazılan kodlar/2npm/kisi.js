const fs = require('fs');
const chalk = require('chalk');

//kisiler json tabanlı bir dosyada tutulacak
//dosyadan veriler okunup js dizisine dönüştürülecek
//jsonu js objelerine dönüştürmek için JSON.parse(json),, objeleri jsona dönüştürmek için JSON.stringify(jsDizisi)
//dosyadan okunan değerler Buffer tipindedir, tostring diyerek okunabilir json değerlere dönüştürülebilir.
const ekle = (ad, telNo) => {
    //console.log("Eklenecek kişi " + ad + " telno:" + telNo);
    const kisilerDizisi = dosyadanKisileriOku();

    const ayniAdaSahipKisilerDizisi = kisilerDizisi.filter( kisi => kisi.isim === ad);

    if (ayniAdaSahipKisilerDizisi.length === 0) {
        kisilerDizisi.push({
            isim: ad,
            tel: telNo
        });
        dosyayaKisileriYaz(kisilerDizisi);
    } else {
       
        console.log(chalk.red.inverse(ad + " isimli kayıt zaten var"));
        
    }

}

const dosyayaKisileriYaz =  kisilerDizisi => {
    const jsonData = JSON.stringify(kisilerDizisi);
    fs.writeFileSync('kisiler.json', jsonData);
}

const dosyadanKisileriOku = _ => {

    try {
        const dataBuffer = fs.readFileSync('kisiler.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }


}

const sil =  isim => {
    console.log("silinecek kişi " + isim);
    const tumKisiler = dosyadanKisileriOku();
    const dosyayaTekrarYazilacakKisiler = tumKisiler.filter((kisi) => kisi.isim !== isim);

    if (tumKisiler.length > dosyayaTekrarYazilacakKisiler.length) {
        console.log(chalk.green.inverse("Kişi bulundu ve silindi"));
        dosyayaKisileriYaz(dosyayaTekrarYazilacakKisiler);
    } else { 
        console.log(chalk.red.inverse(isim+" adlı kişi listede bulunamadı"));
 
    }



}

const goster =  isim => {
    console.log(chalk.yellow("gösterilecek kişi " + isim));
    const kisilerDizisi = dosyadanKisileriOku();
    const bulunanKisi = kisilerDizisi.find(kisi => kisi.isim === isim );

    if (bulunanKisi) {
        console.log(chalk.green.inverse("Aradıgınız kişinin numarası :" + bulunanKisi.tel));
    
    } else { 
        console.log(chalk.red.inverse(isim+" adlı kişi listede bulunamadı"));
        
    }
}

const listele = function () {
    console.log(chalk.yellow("tüm rehber gösterilecek"));
    const kisilerDizisi = dosyadanKisileriOku();
    kisilerDizisi.forEach( kisi => console.log("Adı:"+kisi.isim + " Telefon Numarası:"+kisi.tel));
}

module.exports = {
    kisiEkle: ekle,
    kisiSil: sil,
    kisiGoster: goster,
    kisiListele: listele
}