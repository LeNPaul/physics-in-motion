const express = require('express');
const router = express.Router();
const Lessons = require('../models/lessons');

// Return lessons information for user
// Sample request: curl --cookie "" http://localhost:8080/lesson_data
router.get('/lesson_data', (req, res) => {
  Lessons.find({/*username: req.user.username*/}, function(err, lessons) {
    res.json(lessons);
  });
});

// Return the most recently accessed Lessons
// Sample request: curl --cookie "" http://localhost:8080/recent_lessons
router.get('/recent_lessons', (req,  res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    var tempLessons = [];
    var lastAccessedLessons = [];
    lessons.sort(function (a, b) {
      return b.updated - a.updated;
    });
    for(i = 0; i< lessons.length; i++) {
      if(tempLessons.includes(lessons[i].module_name) == false) {
        lastAccessedLessons.push(lessons[i])
        tempLessons.push(lessons[i].module_name)
      }
    }
    res.json(lastAccessedLessons);
  });
});

// Return the progress of a lesson
// Sample request: curl --cookie "" http://localhost:8080/lesson_progress/kinematics
router.get('/lesson_progress/:lesson', (req, res) => {
  Lessons.find({username: req.user.username, module_name: req.params.lesson}, function(err, lessons) {
    var total = 0;
    var done = 0;
    for (i = 0; i < lessons.length; i++) {
      if (lessons[i].status) {
        done = done + 1;
      }
      total = total + 1;
    }
    res.json({progress: done / (total - 1)});
  });
});

router.get('/notes/:lesson/data', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    var lessonInfo = lessons[0]['lesson_modules'][req.params.lesson];
    res.json(lessonInfo);
  });
});

// Updates the updated field to be the current time
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{"lessonPath":"forces.friction_drag"}' http://localhost:8080/update_lesson_time
router.post('/update_lesson_time', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    for(i = 0; i < lessons.length; i++) {
      var lessonPath = req.body.lessonPath.split('.')
      if(lessons[i].module_name == lessonPath[0] && lessons[i].lesson_name == lessonPath[1]) {
        Lessons.findByIdAndUpdate(
          lessons[i]._id,
          {updated: new Date()},
          { new: true },
          function(err, time) {
            if (err == null) {
              res.json({Success: true});
            } else {
              res.json({Success: false});
            }
          }
        )
      }
    }
  });
});

// Update status for a lesson module for a user
//  Workflow:
//    First get the Object ID based on username
//    Assuming username is unique globally - might be better to link documents somehow
//    Use the Object ID to update the document
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{"lessonPath":"forces.friction_drag", "status": true}' http://localhost:8080/update_lesson_status
router.post('/update_lesson_status', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    for(i = 0; i < lessons.length; i++) {
      var lessonPath = req.body.lessonPath.split('.')
      if(lessons[i].module_name == lessonPath[0] && lessons[i].lesson_name == lessonPath[1]) {
        Lessons.findByIdAndUpdate(
          lessons[i]._id,
          {status: req.body.status},
          { new: true },
          function(err, lessons) {
            if (err == null) {
              res.json({Success: true});
            } else {
              res.json({Success: false});
            }
          }
        )
      }
    }
  });
});

// Update notes for a user
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{"lessonPath":"forces.friction_drag", "notes": "Hello world note"}' http://localhost:8080/update_lesson_notes
router.post('/update_lesson_notes', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    var setObject = {};
    setObject["lesson_modules." + req.body.lessonPath + ".notes"] = req.body.notes;
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      setObject,
      { new: true },
      function(err, notes) {
        if (err == null) {
          res.json({Success: true});
        } else {
          res.json({Success: false});
        }
      }
    )
  });
});

module.exports = router;
