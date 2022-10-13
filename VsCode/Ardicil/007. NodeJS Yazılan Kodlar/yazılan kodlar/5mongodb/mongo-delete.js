/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;*/

const { MongoClient, ObjectID } = require('mongodb');

const databaseURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'node-dersleri';

MongoClient.connect(databaseURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, result) => {

    if (error) {
        return console.log("DBye bağlanılamadı" + error);
    }
    console.log("Dbye bağlanıldı");
    const db = result.db(databaseName);

    db.collection('users').deleteMany({
        ad: 'emre',
    }).then(sonuc => console.log(sonuc));
    db.collection('users').deleteOne({ ad: 'ali' }).then(sonuc => console.log(sonuc));


});