//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('employee', { title: 'Search Results Employee' });
//});

//module.exports = router;

var express = require('express'); 
const employee_controlers= require('../controllers/employee'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', employee_controlers.employee_view_all_Page ); 
module.exports = router; 