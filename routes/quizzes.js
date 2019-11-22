const express = require('express');
const router = express.Router();
const Quizzes = require('../models/quizzes');

router.get('/quiz', (req, res) => {
  var newQuiz = new Quizzes({
    username: "test user"
  })
  newQuiz.save(function(err, data) {
    if (err) {
      // TODO - add proper error handling here
    }
  })
  res.json({Success: true});
});

module.exports = router;
