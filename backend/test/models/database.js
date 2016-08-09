const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const mysql = require('../mysql');

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, Object.assign(mysql.options, {
	timezone: '+09:00'
}));
const Schema = sequelize;
const DataTypes = Sequelize;

const database = {

	Sequelize,

	sequelize,

	Schema,

	DataTypes,

	transaction: sequelize.transaction.bind(sequelize),

	models: {},

	getModel(name) {
		if (name in database.models) return database.models[name];
		database.associate();
		return sequelize.import(path.join(__dirname, name + '.js'));
	},

	associate() {
		fs.readdirSync(path.join(__dirname)).filter((file) => {
			return file.indexOf('.') !== 0 && file !== 'database.js';
		}).forEach((file) => {
			const model = sequelize.import(path.join(__dirname, file));
			database.models[model.name] = model;
		});

		Object.keys(database.models).forEach((name) => {
			if ('associate' in database.models[name]) {
				database.models[name].associate(database.models);
			}
		});
	},

	sync(options) {
		options = options || {};
		database.associate();
		return Schema.sync(options);
	}

};

module.exports = database;
