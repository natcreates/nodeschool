'use strict';

var promise = new Promise((fulfill, reject) => {
	fulfill('PROMISE VALUE');
});

// first param is success case, 2nd is rejection
promise.then(console.log, null);

// this will execute first because resolution/rej function
// of promises fired on different turn of event loop from
// one they are created on
console.log('MAIN PROGRAM');