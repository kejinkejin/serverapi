var express = require('express');
var router = express.Router();
var zipCtrl = require('../controllers/zipCtrl');
//you could get by user email or get all the items
router.get('/getStates', zipCtrl.getStates);
router.get('/getCities/:state', zipCtrl.getCities);

module.exports = router;