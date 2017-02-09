var mongoose = require('mongoose');
var mongodbUri = 'mongodb://kejin:finalproject2017@ds145379.mlab.com:45379/freerecycling';
var connection = mongoose.createConnection(mongodbUri);


var mySchema = new mongoose.Schema({
    email:String,
    personName:String,
    address:[{
        state:String,
        city:String,
        street:String,
        zipcode:String
    }],
    items:[{
        itemName:String,
        description:String,
        details:String,
        contactinfor:String,
        category:String,
        state:String,
        city:String,
        long:String,
        lat:String,
        imgurl:String
    }]
});

module.exports = connection.model('peopleitems', mySchema);