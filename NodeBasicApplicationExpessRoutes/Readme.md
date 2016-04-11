This is small express router demo program

1. implemented by using 
	express.Router();
	app.use()

	router:
		with parameter(request parameter validation before going to route)
		without parameter
2. directly by using
	app.route()

Recap:
• Use express.Router() multiple times to define groups of routes
• Apply the express.Router() to a section of our site using app.use()
• Use route middleware to process requests
• Use route middleware to validate parameters using .param()
• Use app.route() as a shortcut to the Router to define multiple requests on a route