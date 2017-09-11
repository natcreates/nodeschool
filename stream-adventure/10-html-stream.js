const trumpet = require('trumpet'),
	through = require('through2');
var transform = through(write, end);
const tr = trumpet();

// create a separate transform stream based on a CSS selection
var loud = tr.select('.loud').createStream();

// send this stream to be through transform stream and then back to itself
// trumpet combines this stream with the untransformed original
loud.pipe(transform).pipe(loud);

// changed HTML with class of loud to uppercase
function write (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

function end (done) {
	done();
}

process.stdin.pipe(tr).pipe(process.stdout);;

// More succinct solution
// loud.pipe(through(function (buf, _, next) {
// 	this.push(buf.toString().toUpperCase());
// 	next();
// })).pipe(loud);