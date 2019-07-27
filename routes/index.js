const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
      user : req.user,
      title : 'Physics in Motion | How physics should be taught'
     });
});

router.get('/about', (req, res) => {
    res.render('home/about', {
      user : req.user,
      title : 'About Us | Physics in Motion'
    });
});

router.get('/contact', (req, res) => {
    res.render('home/contact', {
      user : req.user,
      title : 'Contact | Physics in Motion'
    });
});

router.get('/privacy', (req, res) => {
    res.render('home/privacy', {
      user : req.user,
      title : 'Privacy | Physics in Motion'
    });
});

router.get('/terms', (req, res) => {
    res.render('home/terms', {
      user : req.user,
      title : 'Terms | Physics in Motion'
    });
});

// Curriculum

router.get('/courses', (req, res) => {
    res.render('courses/courses', {
      user : req.user,
      title : 'Courses'
    });
});

// Classical Mechanics

router.get('/classical-mechanics', (req, res) => {
    res.render('courses/classical-mechanics', {
      user : req.user,
      title : 'Classical Mechanics'
    });
});

router.get('/kinematics', (req, res) => {
    res.render('lessons/kinematics', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Kinematics'
    });
});

router.get('/forces', (req, res) => {
    res.render('lessons/forces', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Forces'
    });
});

router.get('/energy', (req, res) => {
    res.render('lessons/energy', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Energy'
    });
});

router.get('/momentum', (req, res) => {
    res.render('lessons/momentum', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Momentum'
    });
});

router.get('/simple-harmonic-motion', (req, res) => {
    res.render('lessons/simple-harmonic-motion', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Simple Harmonic Motion'
    });
});

router.get('/waves', (req, res) => {
    res.render('lessons/waves', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Waves'
    });
});

router.get('/fluids', (req, res) => {
    res.render('lessons/fluids', {
      user : req.user,
      course : 'Classical Mechanics',
      course_url : 'classical-mechanics',
      title : 'Fluids'
    });
});

// Mathematics

router.get('/mathematics', (req, res) => {
    res.render('courses/mathematics', {
      user : req.user,
      title : 'Mathematics'
     });
});

router.get('/algebra', (req, res) => {
    res.render('lessons/algebra', {
      user : req.user,
      course : 'Mathematics',
      course_url : 'mathematics',
      title : 'Algebra'
     });
});

router.get('/geometry', (req, res) => {
    res.render('lessons/geometry', {
      user : req.user,
      course : 'Mathematics',
      course_url : 'mathematics',
      title : 'Geometry'
     });
});

router.get('/calculus', (req, res) => {
    res.render('lessons/calculus', {
      user : req.user,
      course : 'Mathematics',
      course_url : 'mathematics',
      title : 'Calculus'
     });
});

// Resources

router.get('/resources', (req, res) => {
    res.render('courses/resources', {
      user : req.user,
      title : 'Resources'
     });
});

router.get('/register', (req, res) => {
    res.render('register', { });
});

router.post('/register', (req, res, next) => {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/login', (req, res) => {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

// Test database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/physics_in_motion');
var db = mongoose.connection;

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    CommentBody: String,
    UserName: String,
    DatePosted: Date,
});

var Comment = mongoose.model('Comment', commentSchema);

// Testing endpoint
router.get('/test', (req, res) => {
  Comment.find({UserName: 'Nick'}, function(error, comments) {
      console.log(comments); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
  });
});

module.exports = router;
