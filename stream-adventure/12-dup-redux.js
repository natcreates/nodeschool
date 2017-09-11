const duplexer = require('duplexer2'),
	through = require('through2');


module.exports = function(counter) {
	var writable = through(write, end);
	counter.pipe(writable);
	var countries = {};

	function write (line, encoding, next) {

		if (countries[line.country]) {
			countries[line.country]++;
		} else {
			countries[line.country] = 1;
		}
	// then proceed
	next();
	}

	function end (done) {
		console.log(countries);
		counter.setCounts(countries);
		return duplexer(writable, counter);
		done();
	}
}