const express = require('express');
const Lessons = require('../models/lessons');
const router = express.Router();

// Return lessons information for user
// Sample request: curl --header "Content-Type: application/json" quest POST   --data '{"username":"paul.le@interfaceware.com"}'   http://localhost:8080/lessons
router.post('/lessons', (req, res) => {
  Lessons.find({username: req.body.username}, function(err, lessons) {
    console.log("Returned the following:");
    console.log(lessons)
    res.json(lessons);
  });
});

// Testing endpoint
router.post('/test', (req, res) => {
  //  First get the Object ID based on username
  //  Assuming username is unique globally - might be better to link documents somehow
  //  Use the Object ID to update the document
  Lessons.find({username: req.body.username}, function(err, lessons) {
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      {
        $set: {
          "lesson_modules.kinematics.motion_in_one_dimension.status": true
        }
      },
      // the callback function
      function(err, lessons) {
        console.log("Returned the following:");
        console.log(lessons)
        res.json(lessons);
      }
    )
  });
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
