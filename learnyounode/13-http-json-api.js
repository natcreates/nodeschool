// # HTTP JSON API SERVER (Exercise 13 of 13)  
//
//   Write an HTTP server that serves JSON data when it receives a GET request
//   to the path '/api/parsetime'. Expect the request to contain a query string
//   with a key 'iso' and an ISO-format time as the value.
//
//   For example:
//
//   /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
//   The JSON response should contain only 'hour', 'minute' and 'second'
//   properties. For example:
//
//      {
//        "hour": 14,
//        "minute": 23,
//        "second": 15
//      }
//
//   Add second endpoint for the path '/api/unixtime' which accepts the same
//   query string but returns UNIX epoch time in milliseconds (the number of
//   milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
//   For example:
//
//      { "unixtime": 1376136615474 }
//
//   Your server should listen on the port provided by the first argument to
//   your program.
//
//  ─────────────────────────────────────────────────────────────────────────────
//
//  ## HINTS
//
//   The request object from an HTTP server has a url property that you will
//   need to use to "route" your requests for the two endpoints.
//
//   You can parse the URL and query string using the Node core 'url' module.
//   url.parse(request.url, true) will parse content of request.url and provide
//   you with an object with helpful properties.
//
//   For example, on the command prompt, type:
//
//      $ node -pe "require('url').parse('/test?q=1', true)"
//
//   Documentation on the url module can be found by pointing your browser
//   here:
//   file:///home/nat/.nvm/versions/node/v6.11.3/lib/node_modules/learnyounode/
//   node_apidoc/url.html
//
//   Your response should be in a JSON string format. Look at JSON.stringify()
//   for more information.
//
//   You should also be a good web citizen and set the Content-Type properly:
//
//      res.writeHead(200, { 'Content-Type': 'application/json' })
//
//   The JavaScript Date object can print dates in ISO format, e.g. new
//   Date().toISOString(). It can also parse this format if you pass the string
//   into the Date constructor. Date.getTime() will also come in handy.



var http = require('http'),
	port = process.argv[2],
	url = require('url');
var server = http.createServer(function listener(req, response) {
	// if the method is get
	if (req.method === 'GET') {
		// get a better way of accessing the req.url
		var requestObj = url.parse(req.url, true);
		// convert the query string into a date
		var date = new Date(requestObj.query.iso);
		var responseObject;
		if (requestObj.pathname === '/api/parsetime') {
			var hour = date.getHours(),
				minute = date.getMinutes(),
				second = date.getSeconds();
			var responseObject = {
				hour,
				minute,
				second
			}
		}

		if (requestObj.pathname === '/api/unixtime') {
			var unixtime = date.getTime();
			responseObject = {
				"unixtime" : unixtime
			}
		}
		// write the headers and send the data
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify(responseObject));
	}
});

server.listen(port);

// OFFICIAL SOLUTION
// Puts time conversions into functions
// returns 404 on whether the result actually exists, rather than it not being a get
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result

    //   if (/^\/api\/parsetime/.test(req.url)) {
    //     result = parsetime(time)
    //   } else if (/^\/api\/unixtime/.test(req.url)) {
    //     result = unixtime(time)
    //   }

    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))
