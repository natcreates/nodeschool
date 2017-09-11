var http = require('http');
var concat = require('concat-stream');

var data = '';
http.get(process.argv[2], function(response) {
	// pass a readable stream of data to the concat function, which then 
	// calls the function passed in
	response.pipe(concat(function(data) {
		data = data.toString();
		console.log(data.length + '\n' + data);
	}));
	
}).on('error', console.error);
