const express = require('express');
const router = express.Router();
const sendAggrigateController = require('../controller/aggrigateController');

 
router.get('/', sendAggrigateController.handleAggrigate)




module.exports = router;