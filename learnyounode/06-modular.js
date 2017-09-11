var fs = require('fs');
var path = require('path');

// a callback is a function that is called at the completion of a given task
// this function expects a callback as an arg
// this callback is called within another callback, doneReading
// doneReading executes after readdir has finished reading the files
// the callback passed as an arg to the whole function
// is needed so that the program knows to print the filteredList when this function completes
function readAndFilter(folder, ext, callback) {
	ext = '.' + ext;
	var filteredList = [];
	fs.readdir(folder, function doneReading(err, files) {
		// if there's an error pass it into callback and execute
		// and return out of function
		if (err) {
			return callback(err);
		}

		// otherwise do the filtering
		files.forEach(function(file) {
			if (path.extname(file) === ext) {
				filteredList.push(file);
			}
		})
		// and call the callback function
		// which will execute after readdir has finished
		callback(null, filteredList);
	});
}

module.exports = readAndFilter;

// another way of filtering
// list = list.filter(function(file)) {
	// return path.extename(file) === '.' + ext;
// });