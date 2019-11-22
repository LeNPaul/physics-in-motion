const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quizzes = new Schema({
  username: String,
  lesson_name: String,
  question_id: String,
  last_response_answer_id: String,
  last_response_time: String
});

module.exports = mongoose.model('quizzes', Quizzes);
