function delayPrint(message, delay = 1000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(message);
			return resolve();
		}, delay);
	});
}

delayPrint('testing timeout', 0).then(() => {
	return delayPrint('timeout');
}).then(() => {
	return console.log('after timeout');
});
