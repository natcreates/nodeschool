var http = require('http');


function readUrl(url, callback) {
	http.get(url, function(response) {
		var rawData = [];
		response.setEncoding('utf8');
		response.on("data", function(data) {
			rawData.push(data);
		});

		response.on("end", function() {
			rawData.forEach((chunk) => {
				callback(null, chunk);
			})
		});

		response.on("error", function(error) {
			return callback(error);
		});
	})
}


function callback(error, data) {
	if(error) throw error;
	console.log(data);
}

readUrl(process.argv[2], callback);

// Official solution
//http.get(process.argv[2], function(response) {
//	response.setEncoding('utf8');
//	response.on("data", console.log);
//	response.on("error", console.error);
//}).on('error', console.error);

