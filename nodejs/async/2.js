const async = require('async');

async.series([
	(done) => {
		console.log('testing timeout');
		return done(null);
	},
	(done) => {
		setTimeout(() => {
			console.log('timeout');
			return done();
		}, 1000);
	},
	(done) => {
		console.log('after timeout');
	}
]);
