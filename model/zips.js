var mongoose = require('mongoose');
var mongodbUri = 'mongodb://kejin:finalproject2017@ds145379.mlab.com:45379/freerecycling';
var connection = mongoose.createConnection(mongodbUri);

var zipSchema = new mongoose.Schema({
    city: {type: String},
    loc: { type: [Number] },
    pop: {  type: Number  },
    state: {type: String }
});



module.exports = connection.model('zips', zipSchema);