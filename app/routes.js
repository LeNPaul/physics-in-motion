var express = require('express');
var passport = require('passport');
var Account = require('../app/models/account');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.post('/signin', function(req, res) {

		// Read in credentials
		var email = req.body.email;
		var password = req.body.password;

		console.log(email);
		console.log(password);

	});

	app.post('/signup', function(req, res) {
	    Account.register(new Account({ username : req.body.email }), req.body.password, function(err, account) {
	        if (err) {
	            return res.sendfile('./public/signin.html');
	        }

	        passport.authenticate('local')(req, res, function () {
	            res.redirect('/');
	        });
	    });
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
