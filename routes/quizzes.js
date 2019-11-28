const express = require('express');
const router = express.Router();
const Quizzes = require('../models/quizzes');

// Accepts a username and lesson_module name
// Returns the questions for that lesson module
//  Returned as an array with 5 elements
//    Each element must be an object with question text
router.get('/questions', (req, res) => {
  res.json([]);
});

// Accepts a question_id
// Returns 5 answers - 1 correct and 4 incorrect
//  Returned as an array with 5 elements
//    Each element much be an object with answer text
router.get('/answers', (req, res) => {
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
