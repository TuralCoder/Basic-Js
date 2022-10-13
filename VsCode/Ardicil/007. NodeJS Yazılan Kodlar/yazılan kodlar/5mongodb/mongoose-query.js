const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, }).then(_ => {
    console.log("Veritabanına bağlanıldı");
}).catch(err => console.log('Bağlantıda hata cıktı:' + err));

const userSchema = new Schema({age:Number, eyeColor:String, name:String}, { collection: 'kullanici' });
const User = mongoose.model('user', userSchema);

/*User.find({age : 23}, { _id:0, address:1, name:1}, {skip:3, limit:3}).then(tumUserlar => console.log(tumUserlar)).catch(err=>console.log(err));*/

/*User.find({ age: 23 })
    .limit(3)
    .skip(3)
    .sort({ name: 1 })
    .select({ name: 1, address: 1 })
    .then(gelenUserlar => console.log(gelenUserlar));*/

//User.findById('5eb16e7c462a561a5830ff74').then(user => console.log(user));
//User.findOne({ age: 23 }, { age: 1, name: 1 }).then(user => console.log(user));

//Karşılaştırma operatörler
//eq : Eşitlik
//ne : eşit olmayan
// gt, gte, lt, lte , in, nin

//User.find({age : {$gte:25, $lte:30}}, { name: 1, age: 1 }).then(userlar => console.log(userlar));
//User.find({age : {$ne:25}}, { name: 1, age: 1 }).then(userlar => console.log(userlar));
//User.find({ age: { $lte: 30 } }, { name: 1, age: 1 }).then(userlar => console.log(userlar));
//User.find({age : {$in:[23, 32]}}, { name: 1, age: 1 }).then(userlar => console.log(userlar));

//User.find({ age: 29, eyeColor: 'blue' }, { age: 1, name: 1, eyeColor: 1 }).then(user => console.log(user));

/*User.find({},{name:1, eyeColor:1, age:1})
    .and([{ age: 29 }, { eyeColor: 'blue' }]).then(userlar => console.log(userlar));*/


/*User.find({}, { name: 1, eyeColor: 1, age: 1 , isActive:1})
    .and([{age : {$gte : 25}} , {isActive : true}])
    .or([{ age: 29 }, { eyeColor: 'blue' }]).limit(5).then(userlar => console.log(userlar));
*/
//SAYFALAMA YAPARKEN 
// /api/courses?sayfaNumarasi=4&sayfaBasinaGonderiSayisi=10
/*const sayfaNumarasi = 4;
const sayfaBasinaGonderi = 10;
User.find({})
    .skip( (sayfaNumarasi - 1) * sayfaNumarasi )
    .limit(sayfaBasinaGonderi)
    .then(sonuc => console.log(sonuc));*/

/*User.findByIdAndUpdate('5eb16e7c462a561a5830ff7a', { $inc: { age: 4 } }, { new: true, loan: true, overwrite: false }).then(sonuc => console.log(sonuc));   */

//User.updateOne({ index: 5 }, { $set: { eyeColor: 'KahverengiYeni' } }).then(sonuc => console.log(sonuc));
//User.updateMany({ index: { $lte: 3 } }, { name: 'Emre Altunbilek', isActive: true }).then(sonuc => console.log(sonuc));

User.deleteMany({ index: { $lte: 3 } }).then(sonuc => console.log(sonuc));
