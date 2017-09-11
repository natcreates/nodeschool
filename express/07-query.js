const express = require('express');
const app = express();

// Extract data from the query string in the GET /search URL route
app.get('/search', function(req, res) {
	// the req.query is a JSON object 
	// Express does this for you, no need to convert
	res.send(req.query);
});

app.listen(process.argv[2]);
