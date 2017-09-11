var mymodule = require('./06-modular.js');

// this callback is needed so that the console.log is executed when list has a value
// i.e. when the rest of mymodule has finished executing
function callback(err, list) {
	// if err has a value stop and throw error
	if(err) throw err;
	// otherwise list will have a value
	list.forEach(function(file) {
		console.log(file);
	});
}

// mymodule given access to callback function
mymodule(process.argv[2], process.argv[3], callback);
