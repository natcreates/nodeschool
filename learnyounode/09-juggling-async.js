var http = require('http');

var urlData = [];

// recursion! A way of enforcing looping
// the next function readUrl only gets called when
// the previous has endded
function readUrls(i) {
	if (i < 5) {
		readUrl(process.argv[i], i, callback);
	}
}

function readUrl(url, count, callback) {
	http.get(url, function(response) {
		var str = '';
		response.setEncoding('utf8');
		response.on("data", function(data) {
			str += data;
		});

		response.on("end", function() {
			callback(null, str);
			readUrls(count+1);
		});

		response.on("error", function(error) {
			return callback(error);
		});
	});
}


function callback(error, data) {
	if(error) throw error;
	urlData.push(data);

	// only runs when t
	if(urlData.length === 3) {
		urlData.forEach((chunk) => {
			console.log(chunk);
		});
	}
}

readUrls(2);

//readUrl(process.argv[2], process.argv[3], process.argv[4], callback);

// OFFICIAL SOLUTION

var bl = require('bl');
var results = [];
var count = 0;
function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function(err, data) {
			if (err) {
				return console.error(err);
			}

			results[index] = data.toString();
			count++;

			if (count === 3) {
				printResults();
			}
		}))
	});

	for (var i=0; i < 3; i++) {
		httpGet(i);
	}
}

function printResults() {
	for (var i=0; i < 3; i++) {
		console.log(results[i]);
	}
}