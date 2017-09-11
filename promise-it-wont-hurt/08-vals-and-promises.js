
function attachTitle(val) {
	return `DR. ${val}`;
}

var promise = Promise.resolve('MANHATTAN');


// return values are wrapped in promises even if 
// obtained synchronously
// the returned val will resolve on the next turn of the event loop
promise.then(attachTitle).then(console.log);

// ask Rich about this