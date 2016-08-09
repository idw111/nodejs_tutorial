'use strict';

module.exports = (Schema, DataTypes) => {

	const fields = {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validates: {notEmpty: true}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validates: {notEmpty: true}
		},
		photo: DataTypes.STRING,
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING
	};

	const indexes = [
		// {fields: ['username']}
	];

	const getterMethods = {
	};

	const classMethods = {
		associate(models) {
			// User.hasMany(models.Task, {as: 'tasks', foreignKey: 'userId', constraints: false});
		}
	};

	const instanceMethods = {
	};

	const User = Schema.define('User', fields, {
		tableName: 'users',
		timestamps: false,
		indexes,
		getterMethods,
		classMethods,
		instanceMethods
	});

	return User;

};
