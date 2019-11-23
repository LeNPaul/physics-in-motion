const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quizzes = new Schema({
  username: String,
  module_name: String,
  lesson_name: String,
  question_id: String,
  last_response_answer_id: { type: String, default: "" },
  last_response_time: { type: String, default: "" }
});

module.exports = mongoose.model('quizzes', Quizzes);
