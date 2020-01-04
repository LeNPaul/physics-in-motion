const express = require('express');
const router = express.Router();
const Quizzes = require('../models/quizzes');
const Answers = require('../models/answers');
const Questions = require('../models/questions');

// Accepts lesson_name
// Returns the questions for that lesson module
// Each element must be an object with question text
// Sample request: curl --cookie "" --data '{}' http://localhost:8080/questions
router.get('/questions/:lesson_name', (req, res) => {
  Quizzes.find({username: req.user.username, lesson_name: req.params.lesson_name}, function(err, questions) {
    res.json(questions);
  });
});

// Accepts a question_id
// Returns the question text
router.get('/question/:question_id', (req, res) => {
  Questions.find({question_id: req.params.question_id}, function(err, question) {
    res.json({question_text: question[0].question_text});
  });
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Accepts a question_id
// Returns answers with at least 1 correct answer
// Each element must be an object with answer text
router.get('/answers/:question_id', (req, res) => {
  var username = req.user.username; // This is workaround to prevent application from crashing
  // Get correct answers
  Answers.find({question_id: req.params.question_id, is_correct: true}, function(err, correct_answers) {
    var answerResponse = [];
    for (let i=0; i < correct_answers.length; i++) {
      answerResponse.push(correct_answers[i]);
    };
    // Get incorrect answers
    Answers.find({question_id: req.params.question_id, is_correct: false}, function(err, incorrect_answers) {
      for (let i=0; i < incorrect_answers.length; i++) {
        answerResponse.push(incorrect_answers[i]);
      };
      // Shuffle array elements
      shuffle(answerResponse);
      res.json(answerResponse);
    });
  });
});

// Submit a quiz response for a lesson module
// Update the database to include user's last response and time
// Accepts question_id and answer_id
// Returns the response to indicate if correct or not - i.e. {is_correct: true}
// Returned as an object with a field of is_correct that is equal to true or false
// curl --header "Content-Type: application/json" --data '{"question_id": "1", "answer_id": "3456"}' http://localhost:8080/submit_response
router.post('/submit_response', (req, res) => {
  var username = req.user.username; // This is workaround to prevent application from crashing
  // Find user's quiz and update last edit time
  Quizzes.find({username: 'test@email.com', question_id: req.body.question_id}, function(err, quizzes) {
    // Update last edit time
    Quizzes.findByIdAndUpdate(
      quizzes[0]._id,
      {last_response_time: new Date(), last_response_answer_id: req.body.answer_id},
      { new: true },
      function(err, time) {
        // Find answer with the question_id and answer_id
        Answers.find({question_id: req.body.question_id, answer_id: req.body.answer_id}, function(err, answers) {
          if(answers.length > 0) {
            if(answers[0].is_correct == 'true') {
              res.json({is_correct: true});
            } else {
              res.json({is_correct: false});
            };
          } else {
            res.json({is_correct: false});
          }
        });
      }
    )
  });

});

module.exports = router;
