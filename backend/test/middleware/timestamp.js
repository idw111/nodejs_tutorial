var timestamp = function(req, res, next) {
	console.log('Time:', Date.now());
	next();
};

module.exports = timestamp;
