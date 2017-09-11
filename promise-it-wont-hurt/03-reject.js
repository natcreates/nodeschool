'use strict';

var promise = new Promise((fulfill, reject) => {
	setTimeout(function() {
		// after timeout create new Error object
		reject(new Error('REJECTED!'));
	}, 300);
});

// this function catches the Error object
function onReject(err) {
	console.log(err.message);
}

// first param is success case, 2nd is rejection
// pass the onReject function to be called
promise.then(null, onReject);