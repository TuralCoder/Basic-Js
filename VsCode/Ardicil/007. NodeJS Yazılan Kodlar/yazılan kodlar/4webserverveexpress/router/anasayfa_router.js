const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("ana sayfaya girildi");
    res.send('Merhaba from index');
});

module.exports = router;