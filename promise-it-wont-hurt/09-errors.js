// Unlike callbacks, you don't need to handle errs every step
// An error thrown inside a function
// will be handled by the next rejection handler

function parsePromised(data) {
	return new Promise((fulfill, reject) => {
		try {
			var parsedData = JSON.parse(data);
			fulfill(parsedData);
		} catch (e) {
			reject(e);
		}
	});
}

parsePromised(process.argv[2]).then(null, console.log);