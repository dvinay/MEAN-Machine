// loading express app and initiate by calling
var express = require('express'),
	app = express(),
	path = require('path');

// get an instance of the router
var adminRouter = express.Router();


// send our index.html file to the user for the home page
//don't use express.createServer() => node 1.4 is not supporting that function
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// route middleware that will happen on every request
adminRouter.use(function(req, res, next) { // log each request to the console
	console.log(req.method, req.url);
	// continue doing what we were doing and go to the route
	next();
});

// admin main page.
adminRouter.get('/', function(req, res) {
	res.send('I am the dashboard!');
});

// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!');
});

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
	res.send('I show all the posts!');
});

adminRouter.param('name', function(req, res, next, name) {
	// log something so we know its working
	console.log('doing name validations on ' + name);

	// once validation is done save the new item in the req
	req.name = name;
	// go to the next thing
	next();
});

// route with parameters (http://localhost:1337/admin/users/:name)
adminRouter.get('/users/:name', function(req, res) {
	res.send('hello ' + req.params.name + '!');
});

// route with parameters (http://localhost:1337/admin/hello/:name)
adminRouter.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.name + '!');
});

// apply the routes to our application
app.use('/admin', adminRouter);

//instead of creating express.route() we can directly use app.route()
// show the form (GET http://localhost:1337/login)

app.route('/login')
	.get(function(req, res) {
		res.send('this is the login form');
	})
	// process the form (POST http://localhost:1337/login)
	.post(function(req, res) { console.log('processing');
		res.send('processing the login form!');
	});

// start the server
app.listen(1337);
console.log('1337 is the magic port!');