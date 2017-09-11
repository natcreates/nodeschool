const http = require('http'),
	request = require('request');

// r is a readable-writable stream obj returned from the post request
// so you can pipe a readable stream into it
// a GET request would be request('address')
var r = request.post('http://localhost:8099');
// pipe stdin into a post and pipe response stream to console
process.stdin.pipe(r).pipe(process.stdout);

