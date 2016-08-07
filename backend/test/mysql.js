const mysql = {
	database: 'tutorial',
	username: 'tutorial',
	password: 'tutorial',
	options: {
		host: 'localhost',
		port: 3306,
		dialect: 'mysql',
		pool: {
			max: 10,
			min: 0,
			idle: 10000
		}
	}
};

module.exports = mysql;
