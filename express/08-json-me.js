const fs = require('fs'),
	express = require('express'),
	app = express();

// Note on below - official solution enclosed the books-parsing
// in a try catch block, with the catch 
// to send the same error status as the enclosing callback
app.get('/books', function(req, res) {
	let books;
	fs.readFile(process.argv[3], (err, data) => {
		// if there's an error send error code
		if (err) return res.sendStatus(500);

		// convert from Buffer to string, then to JSON
		books = JSON.parse(data.toString());
		// send the book list when done
		res.json(books);
	})
	
});

app.listen(process.argv[2]);
