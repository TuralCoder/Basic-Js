const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, }).then(_ => {
    console.log("Veritabanına bağlanıldı");
}).catch(err => console.log('Bağlantıda hata cıktı:' + err));

var blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
}, { collection: 'yazilarim', minimize: false, bufferCommands: true, timestamps:true });

blogSchema.methods.basligiGoster = function () {
    return this.title;
}

blogSchema.statics.basligaGoreElemanGetir = function (baslik) { 
    return this.find({title:baslik});
}

blogSchema.virtual('ozet').get(function () { 
    return "Bu blogun başlığı:" + this.title + " ve yazarı:" + this.author;
})

const Blog = mongoose.model('blog', blogSchema);
const myBlog = new Blog({ title: 'İlk Blog' });

//console.log(myBlog.basligiGoster());

//myBlog.save().then(b => console.log(b)).catch(hata => console.log(hata));

//Blog.create({ title: 'Ikinci blogum' });

//Blog.basligaGoreElemanGetir('İlk Blog').then(sonuc => console.log(sonuc));


const myBlog2 = new Blog({ title: 'Timestamp kullanımı', author: 'emre altunbilek' });
console.log(myBlog2.ozet);
console.log(myBlog2.toJSON({ virtuals: true }));

myBlog2.save();












