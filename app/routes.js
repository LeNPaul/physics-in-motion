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

	// Set '*' so that it goes to 404 page otherwise

};
