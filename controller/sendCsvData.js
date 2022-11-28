const csvDataSchema = require('../model/csvData');
var csv = require('csvtojson')




const handleCsvData = async (req, res) => {
    var csvResponse
    csv()
      .fromFile(req.file.path)
      .then((response) => {
        for (var x = 0; x < response; x++) {
          csvResponse = parseFloat(response[x].District)
          response[x].District = csvResponse
          csvResponse = parseFloat(response[x].Town)
          response[x].Town = csvResponse
          csvResponse = parseFloat(response[x].Date)
          response[x].Date = csvResponse
          csvResponse = parseFloat(response[x].Count)
          response[x].Count = csvResponse
        }
        csvDataSchema.insertMany(response, (err, data) => {
          if (err) {
            console.log(err)
          } else {
            res.redirect('/')
          }
        })
      })
  };



module.exports = { handleCsvData }