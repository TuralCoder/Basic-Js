const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, }).then(_ => {
    console.log("Veritabanına bağlanıldı");
}).catch(err => console.log('Bağlantıda hata cıktı:' + err));


/*
const schema = new Schema({ name: String });
console.log(schema.path('name') instanceof mongoose.SchemaType);
console.log(schema.path('name') instanceof mongoose.Schema.Types.String);
console.log(schema.path('name').instance);
*/



/*
const numberSchema = new Schema({
    integerOnly: {
        type: Number,
        get: v => {
            console.log('getter tetiklendi v:' + v);
            return Math.round(v) + 1;
        },
        set: v => {
            console.log('setter tetiklendi v şuan:' + v);
            return  Math.round(v) + 5;
        },
        alias: 'i'
    }
});

const Numara = mongoose.model('Numara', numberSchema);

var doc = new Numara();
doc.integerOnly = 2.005; //7
console.log(doc.integerOnly);

console.log(doc.i);

doc.i = 14.005

console.log(doc.integerOnly);

console.log(doc.i);

*/


/*
const metinSchema = new Schema({
    metin: {
        type:Schema.Types.String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 4,
        maxlength: 50,
        enum: ['emre', 'hasan', 'ayşe', 'can'],
        validate: {
            validator: function (v) {
                return v.length > 2;
            },
            message:'burada takıldı'
        }
    }
});

const Metin = new mongoose.model('Metin', metinSchema);
const m1 = Metin({metin:'w'});
m1.save();
*/





/*

const oyuncakSchema = new Schema({
    adi: String
});

const oyuncakKutusuSchema = new Schema({
    oyuncaklar: {
        type: [oyuncakSchema],
        default : undefined,
    },
    oyuncakRenkleri: [String],
});

const OyuncakKutusu = mongoose.model('OyuncakKutusu', oyuncakKutusuSchema);

const oyuncakKutum = new OyuncakKutusu();
oyuncakKutum.oyuncaklar = [{ adi: 'deneme' }, { adi: 'deneme2' }];
oyuncakKutum.oyuncakRenkleri = ['mavi', 'yeşil'];
console.log(oyuncakKutum);

oyuncakKutum.save();
*/


/*
const root = 'https://s3.amazonaws.com/mybucket';

const userSchema = new Schema({
  name: String,
  picture: {
    type: String,
    get: v => `${root}${v}`
  }
});

const User = mongoose.model('User', userSchema);

const doc = new User({ name: 'Val', picture: '/123.png' });
console.log(doc.picture);// 'https://s3.amazonaws.com/mybucket/123.png'
console.log(doc.toObject({ getters: tru }));
*/