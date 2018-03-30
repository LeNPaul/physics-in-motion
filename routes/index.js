const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/test', (req, res) => {
    res.render('curriculum/classical-mechanics', { user : req.user });
});


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

router.get('/classical-mechanics', (req, res) => {
    res.render('classical-mechanics', { user : req.user });
});

router.get('/kinematics', (req, res) => {
    res.render('kinematics', {});
});

router.get('/forces', (req, res) => {
    res.render('forces', {});
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
