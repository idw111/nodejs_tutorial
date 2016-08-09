var express = require('express');
var router = express.Router();

// /

router.use('/', require('./'));

// router.use('/api', require('./api/router'));

router.use('/users', require('./users/router'));

module.exports = router;
