module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.post('/signup', function(req, res) {

		// Read in credentials
		var email = req.body.email;
		var password = req.body.password;
		var password2 = req.body.password;

	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
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
