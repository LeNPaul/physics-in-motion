const express = require('express');
const router = express.Router();
const Quizzes = require('../models/quizzes');
const Answers = require('../models/answers');

// Accepts lesson_name name
// Returns the questions for that lesson module
//  Returned as an array with 5 elements
//    Each element must be an object with question text
// Sample request: curl --cookie "" --data '{}' http://localhost:8080/questions
// TODO: filter for 5 random rows
router.get('/questions/:lesson_name', (req, res) => {
  Quizzes.find({username: req.user.username, lesson_name: req.params.lesson_name}, function(err, questions) {
    res.json(questions);
  });
});

// Accepts a question_id
// Returns 5 answers - 1 correct and 4 incorrect
//  Returned as an array with 5 elements
//    Each element much be an object with answer text
// TODO: somone fetch 1 correct and 4 incorrect
router.get('/answers/:question_id', (req, res) => {
  Quizzes.find({username: req.user.username, question_id: req.params.question_id}, function(err, answers) {
    res.json(answers);
  });
});

// Submit a quiz response for a lesson module
// Update the database to include user's last response and time
// Accepts question_id and answer_id
// Returns the response will indicate if correct or not - i.e. {Success: true}
//   Returned as an object with a field of Success that is equal to true or false

// curl --header "Content-Type: application/json" --data '{"question_id": "1", "answer_id": "3456"}' http://localhost:8080/submit_response

// TODO: app crashes if line 50 does not return anything

router.post('/submit_response', (req, res) => {
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
              res.json({success: true});
            } else {
              res.json({success: false});
            };
          } else {
            res.json({success: false});
          }
        });
      }
    )
  });
});

module.exports = router;
