var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/itemsCtrl');
//you could get by item id
router.get('/:id', itemsCtrl.getItemById);
//inset item
router.post('/', itemsCtrl.addItem);
//delete item
router.delete('/:id', itemsCtrl.removeItem);
//get all items
router.get('/', itemsCtrl.getItems);



//router.get('/getitem', itemsCtrl.getItemsByPersonEmail);
router.get('/add', itemsCtrl.addItem);
//delete item by parameter
router.get('/delete', itemsCtrl.removeItem);
router.post('/update', itemsCtrl.updateItem);

module.exports = router;