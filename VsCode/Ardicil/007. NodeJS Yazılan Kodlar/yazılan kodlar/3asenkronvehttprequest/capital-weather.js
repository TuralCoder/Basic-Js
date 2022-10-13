const axios = require('axios');


function findCapitalWeather(ulke) { 
    axios.get('https://restcountries.eu/rest/v2/name/'+ulke).then(res => {

      /*  const ulke = res.data[0];
        const baskent = ulke.capital;
        const nufus = ulke.population;
        const enlem = ulke.latlng[0];
        const boylam = ulke.latlng[1];*/

        const [ {population:nufus, capital:baskent, latlng : [enlem, boylam]} ] = res.data;

        console.log(`Nufusu : ${nufus} Enlem : ${enlem} Boylam: ${boylam} ve Başkent ${baskent}`);
    
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+baskent+'&appid=5ff5f6121eced2f3ad373070cbbb2040&lang=tr&units=metric').then(res => { 
            //console.log(res.data);
            const {name:baskentOlanSehir, weather:[{description:havaDurumu}], main:{temp:sicaklik}} = res.data;

            console.log(`Başkent ${baskentOlanSehir} bugün hava ${havaDurumu} sıcaklık ${sicaklik}`);
            
        })
    
    });
}
module.exports = findCapitalWeather;
