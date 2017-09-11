var http = require('http'),
	port = process.argv[2],
	map = require('through2-map');
var server = http.createServer(function listener(req, response) {
	// req object offers access to thngs like method and url
	if (req.method === 'POST') {
		// create an array to store chunked data
		// unless encoding is set on the req, the chunks will be Buffer objects
		let body = [];
		req.on('data', (data) => {
			body.push(data);
		}).on('end', () => {
			// combine Buffers, convert to string and upper case
			body = Buffer.concat(body).toString().toUpperCase();

			// deal with errors
			response.on('error', (error) => {
				console.error(error);
			});
			// write the headers and send the data
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.end(body);
		})

		req.on('error', (error) => {
			console.error(error);
		});
		
	} else {
		response.end("Send me a POST");
	}

		// OFFICIAL SOLUTION
		
		//if (req.method === 'POST') {
  				// pipe readable data chunks emitted via the data event on the req
  				// stream to map function
  				// stream to response
  		//		req.pipe(map(function (chunk) {
		//			return chunk.toString().toUpperCase();
		//		})).pipe(response);
		//}
});

server.listen(port);