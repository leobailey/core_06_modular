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


// Create am object called Books that is a model based on the bookModel Schema 
const Book = mongoose.model('Book', bookModel)

// Export the model so we can use it in our code
module.exports = Book

//Export in one line
// Export from this module an objec called Book which is a model based on the Schema bookModel
//module.exports = mongoose.model('Book', bookModel);