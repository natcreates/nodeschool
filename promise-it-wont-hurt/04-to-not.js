'use strict';

var promise = new Promise((fulfill, reject) => {
	fulfill('I FIRED');
	reject(new Error('I DID NOT FIRE'));
});

// this function catches the Error object
function onReject(err) {
	console.log(err.message);
}

// first param is success case, 2nd is rejection
// pass the onReject function to be called
promise.then(console.log, onReject);