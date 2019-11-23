const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const Lessons = require('../models/lessons');
const router = express.Router();

// Temporary location to store quiz information
var quizzes = [
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '1'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '2'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '3'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '4'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '5'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '6'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '7'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '8'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '9'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '10'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '11'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '12'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '13'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '14'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '15'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '16'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '17'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '18'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '19'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '20'},
]

var questions = [
  {question_id: '', question_text: ''}
]

var answers = [
  {answer_id: '', answer_text: '', question_id: '', is_correct: ''}
]

router.get('/register', (req, res) => {
    res.render('register', { });
});

router.post('/register', (req, res, next) => {
    // Create user in database
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
    // Create lessons tracking in database
    var newLessons = new Lessons({
      username: req.body.username
    })
    newLessons.save(function(err, data) {
      if (err) {
        // TODO - add proper error handling here
      }
    })
    // Create quizzes tracking in database
    for(let i = 0; i < quizzes.length; i++) {
      var newQuiz = new Quizzes({
        username: req.body.username,
        module_name: quizzes[i].module_name,
        lesson_name: quizzes[i].lesson_name,
        question_id: quizzes[i].question_id
      })
      newQuiz.save(function(err, data) {
        if (err) {
          // TODO - add proper error handling here
        }
      })
    }
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
