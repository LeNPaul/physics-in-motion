const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quizzes = new Schema({
  username: String,
  lesson_name: String,
  question_id: Sting,
  last_response: String
});

module.exports = mongoose.model('quizzes', Quizzes);
