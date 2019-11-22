const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Questions = new Schema({
  question_id: String,
  question_text: String
});

module.exports = mongoose.model('questions', Questions);
