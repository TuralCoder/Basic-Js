const express = require('express');
const morgan = require('morgan');
const kullaniciRouter = require('./router/kullanici_router');
const anaSayfaRouter = require('./router/anasayfa_router');
const bilinmeyenRouter = require('./router/404_router');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(morgan("common"));

app.use('/users', kullaniciRouter);
app.use('/', anaSayfaRouter);
app.use(bilinmeyenRouter);








app.listen(3000, () => {
   
    console.log("Server 3000 portunu dinliyor");
});

