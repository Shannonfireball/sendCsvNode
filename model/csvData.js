const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const csvSchema = new Schema({
    District:{  
        type:String  
    },  
    Town:{  
        type:String  
    },  
    Date:{  
        type:String  
    },  
    Count:{  
        type:Number  
    }, 
});

                         // creating a model
                                 // mongoose will set Employee to lowercase and plural
module.exports = mongoose.model('csvdatamodel', csvSchema);