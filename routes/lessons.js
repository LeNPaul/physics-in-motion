const express = require('express');
const Lessons = require('../models/lessons');
const router = express.Router();

// Updates the updated field to be the current time
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{"lessonPath":"forces.friction_drag"}' http://localhost:8080/update_time
router.post('/update_time', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    var setObject = {};
    setObject["lesson_modules." + req.body.lessonPath + ".updated"] = new Date();
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      setObject,
      { new: true },
      function(err, time) {
        console.log("Returned the following:");
        console.log(time)
        res.json(time);
      }
    )
  });
});

// Return lessons information for user
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{}' http://localhost:8080/user_lessons
router.get('/user_lessons', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    console.log("Returned the following:");
    console.log(lessons)
    res.json(lessons);
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
    var setObject = {};
    setObject["lesson_modules." + req.body.lessonPath + ".status"] = req.body.status;
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      setObject,
      { new: true },
      function(err, lessons) {
        console.log("Returned the following:");
        console.log(lessons)
        res.json(lessons);
      }
    )
  });
});

// Update notes for a user
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{"lessonPath":"forces.friction_drag", "notes": "Hello world note"}' http://localhost:8080/update_notes
router.post('/update_notes', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    var setObject = {};
    setObject["lesson_modules." + req.body.lessonPath + ".notes"] = req.body.notes;
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      setObject,
      { new: true },
      function(err, notes) {
        console.log("Returned the following:");
        console.log(notes)
        res.json(notes);
      }
    )
  });
});

// Return the most recently accessed Lessons
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{}' http://localhost:8080/get_lessons
router.post('/get_lessons', (req,  res) => {

  //  Loop through each lesson lesson module
  //    For each lesson module, get the most recently accessed lesson
  //  Loop through each lesson module and get the most recently accessed lesson

  Lessons.find({username: req.user.username}, function(err, lessons) {
    var lastAccessedLessons = [];
    for (const [name, lesson] of Object.entries(lessons[0].lesson_modules)) {
      lessonsSorted = Object.keys(lesson).sort(function(a,b){return lesson[b].updated - lesson[a].updated})
      lastAccessedLessons.push([name, lesson[lessonsSorted[1]]]);
    }
    lastAccessedLessons.shift();
    modulesSorted = lastAccessedLessons.sort(function(a,b){return b[1].updated - a[1].updated})
    res.json(modulesSorted);
  });
});

// Return the progress of a lesson
// Sample request: curl --cookie "" --header "Content-Type: application/json" --data '{"lesson":"kinematics"}' http://localhost:8080/get_lesson_progress
router.post('/get_lesson_progress', (req, res) => {
  Lessons.find({username: req.user.username}, function(err, lessons) {
    var modules = lessons[0]["lesson_modules"][req.body.lesson];
    var total = 0;
    var done = 0;
    for (const [name, lesson] of Object.entries(modules)) {
      if (lesson["status"]) {
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
    console.log("Returned the following:");
    console.log(lessonInfo)
    res.json(lessonInfo);
  });
});

module.exports = router;
