const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Answers = new Schema({
  answer_id: String,
  answer_text: String,
  question_id: String,
  is_correct: String
});

module.exports = mongoose.model('answers', Answers);
