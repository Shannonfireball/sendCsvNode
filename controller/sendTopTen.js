const csvDataSchema = require('../model/csvData');


const handleTopTenDate = async  (req, res) => {
    const {date} = req.query;
    // let convertDate = new Date(date)
    console.log(date);
    if(!date){
        const result = await csvDataSchema.find().sort( { "Count": -1 } ).limit(10).exec();
        console.log(result)
        if (!result) {
            return res.render('topTen', { data: '' })
        }
        res.render('topTen', { data: result })
    }
    const result = await csvDataSchema.find({"Date":date}).sort( { "Count": -1 } ).limit(10).exec();
        console.log(result)
        if (!result) {
            return res.render('topTenDateEntered', { data: '' })
        }
        res.render('topTenDateEntered', { data: result })

  };



module.exports = { handleTopTenDate }





// (err, data) => {
//     if (err) {
//     } else {
//       if (data != '') {
//         res.render('index', { data: data })
//       } else {
//         res.render('index', { data: '' })
//       }
//     }
//   }