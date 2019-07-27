const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema({
    username: String,
    lesson: {
      name: String,
      status: String,
      updated: String
    }
});

module.exports = mongoose.model('lessons', Lesson);
