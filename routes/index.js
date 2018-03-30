const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { user : req.user });
});

router.get('/about', (req, res) => {
    res.render('home/about', {});
});

router.get('/privacy', (req, res) => {
    res.render('home/privacy', {});
});

router.get('/terms', (req, res) => {
    res.render('home/terms', {});
});

// Classical Mechanics

router.get('/classical-mechanics', (req, res) => {
    res.render('courses/classical-mechanics', { user : req.user });
});

router.get('/kinematics', (req, res) => {
    res.render('lessons/kinematics', {});
});

router.get('/forces', (req, res) => {
    res.render('lessons/forces', {});
});

router.get('/energy', (req, res) => {
    res.render('lessons/energy', {});
});

router.get('/momentum', (req, res) => {
    res.render('lessons/momentum', {});
});

router.get('/simple-harmonic-motion', (req, res) => {
    res.render('lessons/simple-harmonic-motion', {});
});

router.get('/waves', (req, res) => {
    res.render('lessons/waves', {});
});

router.get('/fluids', (req, res) => {
    res.render('lessons/fluids', {});
});

// Mathematics

router.get('/mathematics', (req, res) => {
    res.render('courses/mathematics', { user : req.user });
});

router.get('/trigonometry', (req, res) => {
    res.render('lessons/trigonometry', { user : req.user });
});

router.get('/calculus', (req, res) => {
    res.render('lessons/calculus', { user : req.user });
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

module.exports = router;
