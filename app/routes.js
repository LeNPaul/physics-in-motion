module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/login', function(req, res) {
		res.sendfile('./public/login.html');
	});

	app.get('/signup', function(req, res) {
		res.sendfile('./public/signup.html');
	});

	app.get('/content', function(req, res) {
		res.sendfile('./public/content.html');
	});

};
