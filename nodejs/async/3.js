function delayPrint(message, delay = 1000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(message);
			return resolve('resolved: ' + message);
		}, delay);
	});
}

// delayPrint('1').then((passed) => {
// 	throw new Error('');
// 	console.log(passed);
// 	return delayPrint('2');
// }).catch((err) => {
// 	console.log(err)
// }).then((passed) => {
// 	console.log(passed);
// 	return delayPrint('3');
// }).catch((err) => {
// 	console.log(err);
// });

Promise.all([
	delayPrint('1'),
	delayPrint('2'),
	delayPrint('3')
]).then(() => {
	console.log('all promises are resolved');
});
