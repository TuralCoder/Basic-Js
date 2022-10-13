let emre = {
    adi: 'Emre',
    soyAdi: 'Altunbilek',
    dogumYili: 1988,
    evliMi: false,
    sevdigiRenkler: ['yeşil', 'mavi'],
    yasiHesapla: function () {
        this.yas = 2020 - this.dogumYili;
    }
};


let hasan = {
    adi: 'Hasan',
    soyAdi: 'Yılmaz',
    dogumYili: 1978,
    evliMi: true,
    sevdigiRenkler: ['yeşil', 'mavi'],
    yasiHesapla: function () {
        this.yas = 2020 - this.dogumYili;
    }
};


console.log(emre);
console.log(emre.dogumYili);
console.log(emre['dogumYili']);

emre.yasiHesapla();
console.log(emre.yas);

hasan.soyAdi = "yeni soyadı";
hasan['soyAdi'] = "yepyeni soyadı";
console.log(hasan);

let ogrenciler = [emre, hasan];
console.log(ogrenciler[0].dogumYili);

let ayse = new Object();
ayse.adi = "Ayse";
ayse.dogumYili = 1995;



