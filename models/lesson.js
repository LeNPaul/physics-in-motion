const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema({
    username: String,
    kinematics: {
      motion_in_one_dimension: {
        status: { type: Boolean, default: false},
        updated: Date
      },
      motion_in_two_dimensions: {
        status: { type: Boolean, default: false},
        updated: Date
      },
      simple_motion_in_one_dimension: {
        status: { type: Boolean, default: false},
        updated: Date
      },
      simple_motion_in_two_dimensions: {
        status: { type: Boolean, default: false},
        updated: Date
      }
    }
});

module.exports = mongoose.model('lessons', Lesson);
