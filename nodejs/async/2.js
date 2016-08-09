const async = require('async');

async.series([
	function(next) {
		setTimeout(() => {
			console.log(1);
			next(null, 100);
		}, 1000);
	},
	function(next) {
		setTimeout(() => {
			console.log(2);
			next(null, 200);
		}, 1000);
	},
	function(next) {
		console.log(3);
		next(null, 300);
	}
], (err, results) => {
	console.log(results);
});

// async.series([
// 	(done) => {
// 		console.log('testing timeout');
// 		return done(null);
// 	},
// 	(done) => {
// 		setTimeout(() => {
// 			console.log('timeout');
// 			return done();
// 		}, 1000);
// 	},
// 	(done) => {
// 		console.log('after timeout');
// 	}
// ]);
