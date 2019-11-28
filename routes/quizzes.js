const express = require('express');
const router = express.Router();
const Quizzes = require('../models/quizzes');

// Accepts lesson_name name
// Returns the questions for that lesson module
//  Returned as an array with 5 elements
//    Each element must be an object with question text
// Sample request: curl --cookie "" --data '{}' http://localhost:8080/questions
// TODO: filter for 5 random rows
router.get('/questions/:lesson_name', (req, res) => {
  Quizzes.find({username: req.user.username, lesson_name: req.params.lesson_name}, function(err, lessons) {
    res.json(lessons);
  });
});

// Accepts a question_id
// Returns 5 answers - 1 correct and 4 incorrect
//  Returned as an array with 5 elements
//    Each element much be an object with answer text
router.get('/answers/:question_id', (req, res) => {
  res.json([]);
});

// Submit a quiz response for a lesson module
// Update the database to include user's last response and time
// Accepts question_id and answer_id
// Returns the response will indicate if correct or not - i.e. {Success: true}
//   Returned as an object with a field of Success that is equal to true or false
router.post('/submit_response', (req, res) => {
  res.json({});
});

module.exports = router;
