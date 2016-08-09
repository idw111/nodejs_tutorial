var express = require('express');
var router = express.Router();
var database = require('../../models/database');
var User = database.getModel('User');
var bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	User.findAll({}).then(users => {
		return res.render('users', {users});
	});
});

// POST /users
router.post('/', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	new Promise((resolve, reject) => {
		bcrypt.hash(password, 8, (err, hash) => {
			if (err) return reject(err);
			return resolve(hash);
		});
	}).then(hash => {
		return User.create({
			username,
			password: hash,
			firstName,
			lastName
		});
	}).then(user => {
		return res.json({user});
	});
});

router.delete('/:id', (req, res) => {

});

router.get('/:id', function(req, res) {
	const id = req.params.id;
	return res.send(`Welcome ${id}`);
});

router.post('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;
