const express = require('express');
const router = express.Router();


router.use((req, res) => {
    res.send('404 sayfa bulunamad─▒');
});

module.exports = router;