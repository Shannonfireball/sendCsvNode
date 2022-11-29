const csvDataSchema = require('../model/csvData');


const handleAggrigate = async  (req, res) => {
    const resultSouth = await csvDataSchema.aggregate([
        { $match: { District: "South Goa"}},
        { $group: { _id: "$Date", total: { $sum: "$Count" } } },
        { $sort: { total: -1 } }
      ]).exec();
    const resultNorth = await csvDataSchema.aggregate([
        { $match: { District: "North Goa"}},
        { $group: { _id: "$Date", total: { $sum: "$Count" } } },
        { $sort: { total: -1 } }
      ]).exec();
    const resultUnknown = await csvDataSchema.aggregate([
        { $match: { District: "Unknown"}},
        { $group: { _id: "$Date", total: { $sum: "$Count" } } },
        { $sort: { total: -1 } }
      ]).exec();  
      
    const resultTotal = await csvDataSchema.aggregate([
        { $group: { _id: "$Date", total: { $sum: "$Count" } } },
        { $sort: { total: -1 } }
      ]).exec();  

      const result = {
        "resultSouth":resultSouth.sort((a,b)=> a._id > b._id ? -1 : a._id < b._id ? 1 : 0),
        "resultNorth":resultNorth.sort((a,b)=> a._id > b._id ? -1 : a._id < b._id ? 1 : 0),
        "resultUnknown":resultUnknown.sort((a,b)=> a._id > b._id ? -1 : a._id < b._id ? 1 : 0),
        "resultTotal":resultTotal.sort((a,b)=> a._id > b._id ? -1 : a._id < b._id ? 1 : 0)
    };
      
        console.log(result)
        // res.json(result);
        if (!result) {
            return res.render('aggrigate', { data: '' })
        }
        res.render('aggrigate', { data: result })

  };



module.exports = { handleAggrigate }