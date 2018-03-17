// Modules =================================================
var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');
var favicon        = require('serve-favicon');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser');
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;

var app            = express();

// Configuration ===========================================

// Config files
var db = require('./config/db');

// Set our port
var port = process.env.PORT || 8080;

// MongoDB =================================================

// Connect to our mongoDB database
mongoose.connect(db.url)

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + db.url);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// Add HTTP request logging
app.use(logger('dev'));

// Get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

// Establish cookie session
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// Routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// Passport config
var Account = require('./app/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Start application =======================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
