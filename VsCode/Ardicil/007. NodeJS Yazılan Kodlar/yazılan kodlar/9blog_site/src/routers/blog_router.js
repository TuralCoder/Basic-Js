const router = require('express').Router();
const blogController = require('../controllers/blog_controller');


router.get('/', blogController.tumMakaleleriGetir);
router.get('/:makaleID', blogController.tekMakaleGetir);
router.post('/', blogController.aramaYap);
//router.get('/blog', blogController.tumMakaleleriGetir);



module.exports = router;