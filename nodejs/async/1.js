

setTimeout(() => {
	console.log(1);
	setTimeout(() => {
		console.log(2);
		setTimeout(() => {
			console.log(3);
		}, 1000);
	}, 1000);
}, 1000);

function printTimeout(message, done) {
	setTimeout(() => {
		console.log(message);
		if (done) done();
	}, 1000);
}

printTimeout(1, () => {
	printTimeout(2, () => {
		printTimeout(3);
	});
});
