const express = require('express');
const router = express.Router();
const Quizzes = require('../models/quizzes');

// Accepts a question_id and returns 5 answers - 1 correct and 4 incorrect
router.get('/answers', (req, res) => {
  res.json({});
});

// Submit a quiz response for a lesson module
// Update the database to include user's last response and time
// Response will include question_id and answer_id - the response will indicate if correct or not
router.post('/submit_response', (req, res) => {
  res.json({Success: true});
});

module.exports = router;
