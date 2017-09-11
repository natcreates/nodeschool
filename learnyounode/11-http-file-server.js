var http = require('http'),
	fs = require('fs'),
	port = process.argv[2],
	file = process.argv[3];
var server = http.createServer(function listener(req, response) {
		
		var readStream = fs.createReadStream(file);
		response.writeHead(200, {
  				'Content-Type': 'text/plain' 
  		});
  		// note that response.end() doesn't need calling as 
  		// pipe does this automatically
		readStream.pipe(response);
		
});

server.listen(port);
