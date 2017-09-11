var split = require('split');
var through = require('through2');
var stream = through(write, end);
//process.stdin.pipe(process.stdout);

var lineCount = 0;

// split buffers chunks on newlines before you get them
process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);

// break convert even and odd lines to upper and lower case
// add back in newline breaks before printing to stdout
function write (line, encoding, next) {
	lineCount++;

	if (lineCount % 2 === 0) {
		this.push(line.toString().toUpperCase() + '\n');
	} else {
		this.push(line.toString().toLowerCase() + '\n');
	}
	// then proceed
	next();
}

// call when all data is received and converted
// if not specified calls with this.push(null)
function end (done) {
	done();
}