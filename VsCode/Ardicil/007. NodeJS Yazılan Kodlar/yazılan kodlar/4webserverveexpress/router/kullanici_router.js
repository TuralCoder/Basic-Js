const express = require('express');
const router = express.Router()
const Joi = require('@hapi/joi');

const kullanicilar = [
    { id: 1, ad: 'emre', yas: 32 },
    { id: 2, ad: 'hasan', yas: 22 },
    { id: 3, ad: 'ali', yas: 12 },
    { id: 4, ad: 'ayşe', yas: 42 },

];


router.get('/', (req, res) => {
    //console.log(req.query);
    if (req.query.ters) {
        res.send(kullanicilar.reverse());
    } else {
        res.send(kullanicilar);
    }

});


router.get('/:id', (req, res) => {
    console.log(req.params);
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));
    if (bulunanUser) {
        res.send(bulunanUser);
    } else {
        res.status(404).send(req.params.id + ' idli kullanıcı bulunamadı');
    }
});

router.post('/', (req, res) => {
    const { error } = kullaniciBilgileriniOnayla(req.body);

    if (error) {
        res.status(400).send(error.details[0].message)
    } else {
        const yeniKullanici = {
            id: kullanicilar.length + 1,
            ad: req.body.ad,
            yas: req.body.yas
        }
        kullanicilar.push(yeniKullanici);
        res.send(yeniKullanici);
    }
});

router.put('/:id', (req, res) => {

    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));

    if (!bulunanUser) {
        return res.status(404).send(`${req.params.id} li kullanıcı bulunamadı`);
    }

    const { error } = kullaniciBilgileriniOnayla(req.body);

    if (error) {
        res.status(400).send(error.details[0].message)
    } else {
        bulunanUser.ad = req.body.ad;
        bulunanUser.yas = req.body.yas;
        res.send(bulunanUser);
    }
})

router.delete('/:id', (req, res) => {
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));
    if (bulunanUser) {
        const index = kullanicilar.indexOf(bulunanUser);
        kullanicilar.splice(index, 1);
        res.send(bulunanUser);
    } else {
        res.status(404).send(req.params.id + ' idli kullanıcı bulunamadı');
    }
});

function kullaniciBilgileriniOnayla(user) {
    const schema = Joi.object({
        ad: Joi.string().min(3).max(30).required(),
        yas: Joi.number().integer().min(10).max(99).required()
    });
    return schema.validate(user);
}

module.exports = router;