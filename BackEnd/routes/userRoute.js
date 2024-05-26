const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/createUser', userController.sign_up);
router.post('/signIn', userController.sign_in);



module.exports = router;