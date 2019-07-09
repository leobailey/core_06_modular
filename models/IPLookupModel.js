const mongoose = require('mongoose');
const {Schema} = mongoose;
const IPLookupModel = new Schema(
    {
        Id: {type:Number},
        IP: {type:String},
        type: {type:String},
        continent_code: {type:String},
        continent_name: {type:String},
        country_code: {type:String},
        country_name: {type:String},
        region_code: {type:String},
        region_name: {type:String},
        city: {type:String},
        zip: {type:String},
        latitude: {type:String},
        longitude: {type:String}
    }
);

// Create am object called Books that is a model based on the bookModel Schema 
const IPLookUp = mongoose.model('IPLookUp', IPLookupModel)

// Export the model so we can use it in our code
module.exports = IPLookUp

//Export in one line
// Export from this module an objec called Book which is a model based on the Schema bookModel
//module.exports = mongoose.model('Book', bookModel);