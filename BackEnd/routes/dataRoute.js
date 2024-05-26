const express = require('express');
const dataController = require('../controllers/dataController');
const authorize = require('../checkAuthentication');

const router = express.Router();

router.post('/save', authorize.checkAuth, dataController.save_function);
router.delete('/delete', authorize.checkAuth, dataController.delete_function);


 
module.exports = router;