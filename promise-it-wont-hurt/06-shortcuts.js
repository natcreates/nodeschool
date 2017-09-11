'use strict';

// resolve and reject are shortcuts for fulfill and reject functions
var promise = Promise.resolve('PROMISE VALUE');
//var promise = Promise.reject(new Error('ERROR VALUE'));

var secondPromise = (condition) => {
	return new Promise((resolve, reject) => {
		var message = `This is the ${condition}`;
		resolve(message);
	});
}

// if first promise fulfilled, call the second
// and print the resolving value of that promise
promise
	.then(secondPromise)
	.then(console.log)
	.catch((err) => console.error(err.message));