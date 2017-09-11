var through = require('through2');
var stream = through(write, end);
//process.stdin.pipe(process.stdout);

process.stdin.pipe(stream).pipe(process.stdout);

// this write function is called for every buffer of available input
// if not specified then through just passes on the data unmodified
function write (buffer, encoding, next) {
	// do this with this chunk of data
	this.push(buffer.toString().toUpperCase());
	// then proceed
	next();
}

// call when all data is received and converted
// if not specified calls with this.push(null)
function end (done) {
	done();
}