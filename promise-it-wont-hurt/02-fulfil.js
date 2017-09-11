'use strict';

var promise = new Promise((fulfill, reject) => {
	setTimeout(function() {
		// set value to return when promise fulfilled
		fulfill('FULFILLED!');
	}, 300);
});

// console log called with value passed from fulfill
promise.then(console.log);
