'use strict';

module.exports = (Schema, DataTypes) => {

	const fields = {
		message: {
			type: DataTypes.STRING,
			allowNull: false,
			validates: {notEmpty: true}
		},
		complete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	};

	const indexes = [
		// {fields: ['userId']}
	];

	const getterMethods = {
	};

	const classMethods = {
		associate(models) {
			// Task.belongsTo(models.User, {as: 'user', foreignKey: 'userId', targetKey: 'id', constraints: false});
		}
	};

	const instanceMethods = {
	};

	const Task = Schema.define('Task', fields, {
		tableName: 'tasks',
		timestamps: false,
		indexes,
		getterMethods,
		classMethods,
		instanceMethods
	});

	return Task;

};
