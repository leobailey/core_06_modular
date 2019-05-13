const mongoose = require('mongoose');
const {Schema} = mongoose;
const bookModel = new Schema(
    {
        Id: {type:Number},
        Date: {type:String},
        ApiMethod: {type:String},
        IPAddress:{type:String},
        EmailAddress:{type:String},
    }
);

module.exports = mongoose.model('Book', bookModel);