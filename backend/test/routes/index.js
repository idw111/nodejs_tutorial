var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


var test = () => {
	console.log(this.a, this.b);
}

var temp = {a: 1, b: 2};
var test1 = test.bind(temp);

test1();
