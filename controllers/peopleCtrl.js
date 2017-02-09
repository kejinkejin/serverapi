var People = require('../model/people');


//add people
module.exports.addPeople = function (req, res, next) {
    var people = new People(req.body);
    people.save(function (err, post) {
        if (err) { return next(err); }
        res.json(post);
    });
};

