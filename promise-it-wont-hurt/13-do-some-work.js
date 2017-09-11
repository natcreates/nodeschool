'use strict';

var http = require("q-io/http");

// Q-io http read returns a promise
http.read('http://localhost:7000')
	.then((result) => {
		var id = result.toString();
		return http.read(`http://localhost:7001/${id}`);
	})
	.then((output) => {
		console.log(JSON.parse(output));
	})
	.then(null, console.error)
	.done();
