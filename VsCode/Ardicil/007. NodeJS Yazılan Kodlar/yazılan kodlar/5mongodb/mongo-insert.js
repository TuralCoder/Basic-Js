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

    const myID = new ObjectID();
    console.log(myID);
    console.log(myID.getTimestamp());
    console.log(myID.toHexString());

    /*
    db.collection('test').insertOne({
        _id: myID,
        ad: 'emre',
        updatedID: myID,
    }).then(snc => console.log(snc.ops));
    */

    /*db.collection('users').insertOne({
        ad: 'emre',
        yas: 15,
        erkekMi: true
    }, (error, sonuc) => {
            if (error) {
                console.log("Veri eklenemedi" + error);
            } else { 
                console.log(sonuc.ops, sonuc.insertedCount);
                
            }
    });

    db.collection('users').insertOne({
        ad: 'ali',
        yas:25,
    }).then(sonuc => { 
        console.log(sonuc.ops, " promise bağlandı");
    }).catch(hata => { 
        console.log("Promise hata:" + hata);  
        })
    */

    //INSERT MANY
    /*
    db.collection('users').insertMany([
        { ad: "emre", okul: "ege" },
        { ad: "veli", il: "ankara" }
    ]).then(sonuc => console.log(sonuc.ops)).catch(err => console.log(err));
*/
    /*
    db.collection('urunler').insertMany([
        { ad: 'bilgisayar', stok: 50 },
        { ad: 'tv', stok: 51 },
        { ad: 'masa', stok: 52 },
    ]).then(sonuc => console.log(sonuc.insertedCount, sonuc.ops));
    */


});