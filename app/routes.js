module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// Sample API route
	// Grab the nerd model we just created
	var Nerd = require('./models/nerd');
	// Sample api route
	app.get('/api/nerds', function(req, res) {
			// Use mongoose to get all nerds in the database
			Nerd.find(function(err, nerds) {

					// If there is an error retrieving, send the error.
													// Nothing after res.send(err) will execute
					if (err)
							res.send(err);

					res.json(nerds); // Return all nerds in JSON format
			});
	});

	app.post('/signin', function(req, res) {

		// Read in credentials
		var email = req.body.email;
		var password = req.body.password;

		console.log(email);

	});

	app.post('/signup', function(req, res) {

		// Read in credentials
		var email = req.body.email;
		var password = req.body.password;
		var password2 = req.body.password2;

		console.log(email);

	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/about', function(req, res) {
		res.sendfile('./public/about.html');
	});

	app.get('/signin', function(req, res) {
		res.sendfile('./public/signin.html');
	});

	app.get('/signup', function(req, res) {
		res.sendfile('./public/signup.html');
	});

	app.get('/content', function(req, res) {
		res.sendfile('./public/content.html');
	});

};
