// loading express app and initiate by calling
var express = require('express'),
	app = express(),
	path = require('path');

// send our index.html file to the user for the home page
//don't use express.createServer() => node 1.4 is not supporting that function
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// start the server
app.listen(1337);
console.log('1337 is the magic port!');