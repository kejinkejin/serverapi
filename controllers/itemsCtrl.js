var Items = require('../model/items');
var Zips = require('../model/zips');

//get items by the parameters
module.exports.getItemById = function(req, res, next){   
    Items.findOne({_id:req.params.id}, function(err, data){
        if(err){
            return console.error(err);
        }
        else{
            res.send(data);
        }
    });
};

//add item to item collection by people's email
//when you add the data, you should follow the data style
module.exports.addItem = function (req, res) {
    var itemid;
    if(req.body.id){
        itemid = req.body.id;
    }
    if(req.params.id){
        itemid = req.params.id;
    }
    if(itemid){
        req.body.id = id;
    }

    
    if(!req.body.createdAt){
        req.body.createdAt = new Date();
    }
    req.body.updateAt=new Date();
    console.log(req.body);
    console.log(req.body.city);

           
            Zips.findOne({state: req.body.state, city:req.body.city}).select('loc')
            .then(function (data) {
                console.log("this is data");
                console.log(data);
                    req.body.coords.coordinates = data.loc;
                    Items.insertMany(req.body, function (err, post, next) {
                        if (err) { return next(err); }
                        console.log(post);
                        res.json(post);
                    });
                }).catch(function (err) { 
                    console.log(err);
                    return err; });
    
    
    
       /* Items.insertMany(req.body, function (err, post, next) {
            if (err) { return next(err); }
            console.log(post);
            res.json(post);
        });    */
};
//delete item by the 
module.exports.removeItem = function(req, res){
    let itemid = req.body.id||req.params.id||req.query.id;
    if(itemid){
        
    }
    for(var i in req.query){
        console.log(i);
        console.log(req.query[i]);
    }        
    Items.remove(req.query, function(err, data){
        if(err){
            return console.error(err);
        }
        else{
            res.send('item removed!');
        }
    }); 
};


function separateQuery(query) {
	var copyQuery;
	var queryObj = {};
	console.log('Query ===>');
	console.log(query);
	try{
		copyQuery = JSON.parse(query);
	} 
	catch(e) {
		console.log(e);
		copyQuery = query;
	}
	if(copyQuery) {
        queryObj.skip = copyQuery.skip;
		queryObj.limit = copyQuery.limit;
		queryObj.sort = copyQuery.sort;
		queryObj.fields = copyQuery.field;
		
		delete copyQuery.limit;
		delete copyQuery.skip;
		delete copyQuery.field;
		delete copyQuery.sort;
		queryObj.query = copyQuery;
	}
	return queryObj;
}
module.exports.getItems = function(req, res, next){
    let q = separateQuery(req.query.query);
    Items.find(q.query).skip(q.skip)
			.limit(q.limit).sort(q.sort)
			.select(q.fields).then(function(data) {
			res.json({
				success:1,
				data: data
			});
		}).catch(function(err) {
			return next(err);
		});
}

//update item by email and item name
module.exports.updateItem = function(req, res){
    var email = req.query.email;
    var itemName = req.query.itemName;
    var updateStr;
    var description = req.params.description;
    if(description){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"description":description}} );
    }
    var details = req.params.details;
    if(details){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"details":details}} );
    }
    var contactinfor = req.params.contactinfor;
    if(contactinfor){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"contactinfor":contactinfor}} );
    }
    var category = req.params.category;
    if(category){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"category":category}} );
    }
    var state = req.params.state;
    if(state){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"state":state}} );
    }
    var city = req.params.city;
    if(city){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"city":city}} );
    }
    var long = req.params.long;
    if(long){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"long":long}} );
    }
    var lat = req.params.lat;
    if(lat){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"lat":lat}} );
    }
    var newItemName = req.params.newItemName;
    if(newItemName){
        Items.update({peopleemail:email, itemName:itemName},{$set:{"itemName":newItemName}} );
    }

    
        
        
       /* category:String,
        state:String,
        city:String,
        long:String,
        lat:String,
        imgurl:String,
    
        postdate:String*/
    
}