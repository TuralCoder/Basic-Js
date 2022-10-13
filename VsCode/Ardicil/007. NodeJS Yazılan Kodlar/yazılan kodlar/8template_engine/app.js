const express = require('express');
const app = express();
const path = require('path');

const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs');

//ejs default view klasorunu değiştirme
app.set('views', path.resolve(__dirname, 'yeni_default_view'));

app.use(expressLayouts);
app.set('layout', path.resolve(__dirname, 'yeni_default_view/layout_yeni'));


app.get('/', (req, res) => {
    // res.send({
    //     mesaj: 'merhaba'
    // })

    //res.sendFile(path.resolve(__dirname, 'index.html'));

    const kisilerDizisi = [
        {ad:'emre', id : 1},
        {ad:'emre2', id : 2},
        {ad:'emre3', id : 3},
        {ad:'emre4', id : 4},
    ];

    const dersAdi = 'Node JS';
    const yas = 32;
    const renkler = ['kırmızı', 'sarı', 'mavi'];
    const site = "<h1>Site Başlığı </h1><p>paragraph</p>";
    res.render('index', {
        layout: './layout_yeni/yeni.ejs',
        kisiler: kisilerDizisi,
        ders: dersAdi,
        yas,
        renkler,
        site
    });
})


app.listen(3000, () => {
    console.log("3000 portundan server ayaklandı");
})