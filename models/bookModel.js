const mongoose = require('mongoose');
const {Schema} = mongoose;
const bookModel = new Schema(
    {
        _id: {type:ObjectId},
        ID: {type:Int32},
        Date: {type:String},
        ApiMethod: {type:String},
        IPAddress:{type:String},
        EmailAddress:{type:String}
    }
);

module.exports = mongoose.model('Book', bookModel);