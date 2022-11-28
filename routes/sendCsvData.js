const express = require('express');
const router = express.Router();
const sendCsvDataController = require('../controller/sendCsvData');
var empSchema = require('../model/csvData')

let multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })
  var uploads = multer({ storage: storage })

router.post('/',uploads.single('csvFile'), sendCsvDataController.handleCsvData);  
router.get('/', (req, res) => {
    empSchema.find((err, data) => {
      if (err) {
      } else {
        if (data != '') {
          res.render('index', { data: data })
        } else {
          res.render('index', { data: '' })
        }
      }
    }).sort( { "Count": -1 } )
  })




module.exports = router;