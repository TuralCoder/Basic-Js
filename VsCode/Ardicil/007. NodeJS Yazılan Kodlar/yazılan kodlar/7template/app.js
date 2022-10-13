const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');

app.use(express.static('public'));
//app.use('/css', express.static(__dirname + '/public/css'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/viewlarimm'));

app.use(expressLayouts);
app.set('layout', './my')



app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'index.html'));
    const kisiler = [
        {ad:'<h3>emreee</h3><br><h2>denemee</h2>', id:1},
        {ad:'emre2', id:2},
    ]
   // res.render('index',{kisiler, ad:'emre', renkler:['sarı', 'mavi','kırmızı']});
     res.render('index',{layout: './my2',mytitle:' deneme3333333333 ', kisiler, ad:'emre', renkler:['sarı', 'mavi','kırmızı']});
})



app.listen(3000, () => {
    console.log("basladı");
});