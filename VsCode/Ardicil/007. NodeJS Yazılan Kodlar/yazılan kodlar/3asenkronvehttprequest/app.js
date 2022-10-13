const https = require('https');
const yargs = require('yargs');
const capitalWetaher = require('./capital-weather');

calistir();

function calistir() { 
    yargs.command({
        command: 'getir',
        describe: 'bilgileri getirilecek ülke',
        builder: {
            ulke: {
                describe: 'ülkeyi ingilizce olarak yazınız',
                demandOption: true,
                type: 'string'
            },
            
        },
        handler(argv) { 
            //console.log("isim:" + argv.isim + " tel no:" + argv.tel);
            capitalWetaher(argv.ulke);
           
        }
    });
    
    yargs.parse();
}


module.exports = calistir




/*
https.get('https://restcountries.eu/rest/v2/name/turkey', (response) => {

    let data = '';
    response.on('data', chunk => {
        //console.log(chunk);
        data = data + chunk;
    });


    response.on('end', () => { 
        const jsonData = JSON.parse(data);
        if(jsonData[0] != null)
            console.log(jsonData[0].timezones[0]);  
        else console.error("veri getirilemedi");
        
    })
    
    
}).on('error', err => {
    console.log("HATA"+err.message);
});
*/