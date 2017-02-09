var Zips = require('../model/zips');

//get items by the parameters
module.exports.getStates = function(req, res, next){  
        Zips.aggregate([
            { '$group': { '_id': { state: '$state' } } },
            { '$sort': { '_id.state': 1 } },
            { '$project': { state: '$_id.state', '_id': 0 } }
        ]
        ).then(function (data) {
            res.json({
                success: 1,
                states: data
            });
        }).catch(function (err) {  return next(err); });
};


//get cities by state name
module.exports.getCities = function(req, res, next){
    let myState = req.params.state;
    Zips.find({state: myState}).select('city')
        .then(function (data) {
                res.json({success: 1,cities: data});
            }).catch(function (err) { return next(err); });
};

//get coords by state and city
module.exports.getCoords = function(req, res, next){
    let myState = req.params.state;
    Zips.find({state: myState}).select('city')
        .then(function (data) {
                res.json({success: 1,cities: data});
            }).catch(function (err) { return next(err); });
};