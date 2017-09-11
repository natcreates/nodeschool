const express = require('express')
const app = express()

// create stylus css files
app.use(require('stylus').middleware(process.argv[3]));
// tell express where all the static files are
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])
