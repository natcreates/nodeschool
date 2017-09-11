const express = require('express')
const app = express()

// Handle put requests in any subdirectory of '/message'
app.put('/message/:id', function(req, res) {
	// respond with a hash combining the id from the URL and today's date
	var hash = require('crypto')
				.createHash('sha1')
				.update(new Date().toDateString() + req.params.id)
				.digest('hex');
	res.send(hash);
});

app.listen(process.argv[2])
