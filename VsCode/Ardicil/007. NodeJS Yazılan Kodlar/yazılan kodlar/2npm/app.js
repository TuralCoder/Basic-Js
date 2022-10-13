const yargs = require('yargs');
const kisi = require('./kisi');
yargs.version('1.5.3');

//kişi ekle komutu
yargs.command({
    command: 'ekle',
    describe: 'yeni kişi eklemeye yarar',
    builder: {
        isim: {
            describe: 'eklenecek kişi adı',
            demandOption: true,
            type: 'string'
        },
        tel: {
            describe: 'eklenecek kişinin telefon numarası',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) { 
        //console.log("isim:" + argv.isim + " tel no:" + argv.tel);
        kisi.kisiEkle(argv.isim, argv.tel)
    }
});

yargs.command({
    command: 'sil',
    describe: 'kişiyi siler',
    builder: {
        isim: {
            describe: 'silinecek kişi adı',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) { 
    
        kisi.kisiSil(argv.isim)
    }
});

yargs.command({
    command: 'goster',
    describe: 'kişiyi gösterir',
    builder: {
        isim: {
            describe: 'listelenecek kişi adı',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) { 
        kisi.kisiGoster(argv.isim);
    }
});

yargs.command({
    command: 'listele',
    describe: 'tüm rehberi listeler',

    handler(argv) { 
        kisi.kisiListele();
    }
});

//console.log(yargs.argv);
yargs.parse();


