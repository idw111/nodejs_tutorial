var Sequelize = require('sequelize');
var mysql = require('./mysql');
var bcrypt = require('bcryptjs');


// database, username, password
var sequelize = new Sequelize(
	mysql.database,
	mysql.username,
	mysql.password,
	mysql.options
);

const User = sequelize.define('User', {
	username: Sequelize.STRING
	password: Sequelize.STRING
}, {
	tableName: 'users',
	timestamps: false,
	indexes: [
		{fields: ['username'], unique: true}
	],
	getterMethods: {
		fullName: function() {
			return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
		}
	},
	classMethods: {
		findByUsername(username) {
			return User.findOne({where: {username}});
		},
		validatePassword() {

		}
	},
	instanceMethods: {
		validate(password) {
			return new Promise((resolve, reject) => {
				bcrypt.compare(password, this.password, (err, equal) => {
					if (err) return reject(err);
					return resolve(equal);
				});
			});
		}
	}
});

const Task = sequelize.define('Task', {
	message: Sequelize.STRING,
	complete: Sequelize.BOOLEAN
});




sequelize.sync({force: true}).then(() => {
	const username = 'username1';
	const password = 'pw1';
	const firstName = 'jb';
	const lastName = 'kim';

	return new Promise((resolve, reject) => {
		bcrypt.hash(password, 8, (err, hash) => {
			if (err) return reject(err);
			return resolve(hash)
		});
	}).then((hash) => {
		return User.create({
			username,
			password: hash,
			firstName,
			lastName
		});
	});
}).then((user) => {
	return user.validate('pw1');
}).then((equal) => {
	console.log('password is identical:', equal);
}).catch((err) => {
	console.log(err);
});
