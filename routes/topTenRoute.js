const express = require('express');
const router = express.Router();
const sendTopTenDateController = require('../controller/sendTopTen');

 
router.get('/', sendTopTenDateController.handleTopTenDate)




module.exports = router;