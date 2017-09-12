const duplexer = require('duplexer2'),
	through = require('through2');

module.exports = function(counter) {
	var countries = {};
	var writable = through(write, end);

	function write(data, enc, next) {
		if (countries[chunk.country]) {
			countries[chunk.country]++;
		} else {
			countries[chunk.country] = 1;
		}
		next();
  }

  function end() {
		counter.setCounts(countries);
		done();
  }

	return duplexer({objectMode: true}, writable, counter);
}

// module.exports = function(counter) {
// 	let writable = through(write, end);
// 	counter.pipe(writable);
// 	let countries = {};
//
// 	function write (line, encoding, next) {
//
// 		if (countries[line.country]) {
// 			countries[line.country]++;
// 		} else {
// 			countries[line.country] = 1;
// 		}
// 	// then proceed
// 	console.log(countries);
// 	next();
// 	}
//
// 	function end (done) {
// 		console.log(countries);
// 		counter.setCounts(countries);
// 		return duplexer(writable, counter);
// 		done();
// 	}
// }
