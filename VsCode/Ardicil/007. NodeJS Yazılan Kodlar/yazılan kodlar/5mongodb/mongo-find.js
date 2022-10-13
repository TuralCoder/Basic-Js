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

    db.collection('users').find({ ad: 'emre' }).toArray().then(bulunanVeriler => {
        console.log(bulunanVeriler.length);
    })
    db.collection('users').find({ ad: 'emre' }).count().then(sayi => console.log(sayi)
    );
    db.collection('users').find({ ad: 'emre' }, {limit:3}).toArray().then(sayi => console.log(sayi)
    );
    db.collection('users').find({ ad: 'emre' }).limit(5).toArray().then(sayi => console.log(sayi)
    );

    db.collection('users').findOne({ ad: 'emre' }).then(gelenUser => console.log("findone", gelenUser));

    db.collection('users').findOne({ _id: new ObjectID('5ea66c4fd63215477cc40497') }).then(gelenUser => console.log(gelenUser));

});