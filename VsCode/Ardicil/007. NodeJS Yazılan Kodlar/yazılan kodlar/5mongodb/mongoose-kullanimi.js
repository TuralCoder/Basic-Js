const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, }).then(_ => {
    console.log("Veritabanına bağlanıldı");
}).catch(err => console.log('Bağlantıda hata cıktı:' + err));


const userSchema = new mongoose.Schema({
    isim: String
});


const User = mongoose.model('user', userSchema);

const emre = User({ isim: 'hasan'});

emre.save().then(sonuc => console.log(sonuc)).catch(hata => console.log(hata.message));
