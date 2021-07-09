const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    name:String,
    surname:String,
    contact:String,
    appointment:String
},
{
    timestamp:true,
    versionKey:false
});

const VisitorModel = mongoose.model('Visitor',visitorSchema);

module.exports = VisitorModel;