'use strict';

var all = (promise1, promise2) => {
	return new Promise((fulfill, reject) => {
		promise1.then((val) => {
			vals.push(val);
			counter++;

			if (counter >= 2) {
				fulfill(vals);
			}
		});

		promise2.then((val) => {
			vals.push(val);
			counter++;

			if (counter >= 2) {
				fulfill(vals);
			}
		});
	
	});
}

all(getPromise1(), getPromise2()).then(console.log);