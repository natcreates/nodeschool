const http = require('http'),
	through = require('through2'),
	port = process.argv[2],
	stream = through(write, end);

function write (data, encoding, next) {
	this.push(data.toString().toUpperCase());
	// then proceed
	next();
}

// req and response objects are streams
// this allows us to stream one to the other, so the server doesn't
// buffer anything in memory but can respond immediately
server = http.createServer(function (req, response) {
	if (req.method == 'POST') {
		req.pipe(stream).pipe(response);
	}
		
});

server.listen(port);

// OFFICIAL SOLUTION
// server = http.createServer(function (req, response) {
// 	if (req.method == 'POST') {
// 		req.pipe(through(function (buf, _, next) {
// 			this.push(buf.toString().toUpperCase());
// 			next();
// 		})).pipe(res);
// 	} else res.end('send me a post');
		
// });

// server.listen(process.argv[2]);