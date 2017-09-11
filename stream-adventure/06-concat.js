var concat = require('concat-stream');

// get a buffer, reverse it and print it to the console
// note that the concat callback only fires when all data is received and combined
process.stdin.pipe(concat(function (body) {
	var reversed = body.toString().split('').reverse().join('');
	process.stdout.write(reversed);
}));