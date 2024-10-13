const {Router} = require('express');

const testController = require('../controllers/testController');

const router = Router();

router.get('/', testController.test1);
router.get('/test2', testController.test2);


module.exports = router;