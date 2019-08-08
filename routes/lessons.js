const express = require('express');
const Lessons = require('../models/lessons');
const router = express.Router();

// TODO - move these help functions to their own module
function mapLessons(key, status) {
  var value;
  switch (key) {
    // Kinematics
    case "kinematics.motion_in_one_dimension":
      value = { $set: { "lesson_modules.kinematics.motion_in_one_dimension.status": status } };
      break;
    case "kinematics.motion_in_two_dimensions":
      value = { $set: { "lesson_modules.kinematics.motion_in_two_dimensions.status": status } };
      break;
    case "kinematics.simple_motion_in_one_dimension":
      value = { $set: { "lesson_modules.kinematics.simple_motion_in_one_dimension.status": status } };
      break;
    case "kinematics.simple_motion_in_two_dimensions":
      value = { $set: { "lesson_modules.kinematics.simple_motion_in_two_dimensions.status": status } };
      break;
    // Forces
    case "forces.friction_drag":
      value = { $set: { "lesson_modules.forces.friction_drag.status": status } };
      break;
    case "forces.newtons_laws":
      value = { $set: { "lesson_modules.forces.newtons_laws.status": status } };
      break;
    case "forces.simple_forces":
      value = { $set: { "lesson_modules.forces.simple_forces.status": status } };
      break;
    // Energy
    case "energy.conservative_forces":
      value = { $set: { "lesson_modules.energy.conservative_forces.status": status } };
      break;
    case "energy.energy_conservation_work":
      value = { $set: { "lesson_modules.energy.energy_conservation_work.status": status } };
      break;
    case "energy.power":
      value = { $set: { "lesson_modules.energy.power.status": status } };
      break;
    case "energy.work_potential_energy":
      value = { $set: { "lesson_modules.energy.work_potential_energy.status": status } };
      break;
    // Momentum
    case "momentum.elastic_collisions":
      value = { $set: { "lesson_modules.momentum.elastic_collisions.status": status } };
      break;
    case "momentum.explosions":
      value = { $set: { "lesson_modules.momentum.explosions.status": status } };
      break;
    case "momentum.momentum_conservation":
      value = { $set: { "lesson_modules.momentum.momentum_conservation.status": status } };
      break;
    // Simple Harmonic Motion
    case "simple_harmonic_motion.damped_harmonic_motion":
      value = { $set: { "lesson_modules.simple_harmonic_motion.damped_harmonic_motion.status": status } };
      break;
    case "simple_harmonic_motion.driven_oscillations":
      value = { $set: { "lesson_modules.simple_harmonic_motion.driven_oscillations.status": status } };
      break;
    case "simple_harmonic_motion.dynamics_simple_harmonic_motion":
      value = { $set: { "lesson_modules.simple_harmonic_motion.dynamics_simple_harmonic_motion.status": status } };
      break;
    case "simple_harmonic_motion.the_pendulum":
      value = { $set: { "lesson_modules.simple_harmonic_motion.the_pendulum.status": status } };
      break;
    // Waves
    case "waves.characteristics_waves":
      value = { $set: { "lesson_modules.waves.characteristics_waves.status": status } };
      break;
    case "waves.interference":
      value = { $set: { "lesson_modules.waves.interference.status": status } };
      break;
    case "waves.superposition_of_waves":
      value = { $set: { "lesson_modules.waves.superposition_of_waves.status": status } };
      break;
    // Fluids
    case "fluids.buoyancy":
      value = { $set: { "lesson_modules.fluids.buoyancy.status": status } };
      break;
    case "fluids.continuity":
      value = { $set: { "lesson_modules.fluids.continuity.status": status } };
      break;
    case "fluids.fluid_dynamics":
      value = { $set: { "lesson_modules.fluids.fluid_dynamics.status": status } };
      break;
    case "fluids.fluid_statics":
      value = { $set: { "lesson_modules.fluids.fluid_statics.status": status } };
      break;
    case "fluids.incompressible_fluids":
      value = { $set: { "lesson_modules.fluids.incompressible_fluids.status": status } };
      break;
    case "fluids.pressure":
      value = { $set: { "lesson_modules.fluids.pressure.status": status } };
  }
  return value;
}

// TODO - move these help functions to their own module
function mapNotes(key, notes) {
  var value;
  switch (key) {
    // Kinematics
    case "kinematics.motion_in_one_dimension":
      value = { $set: { "lesson_modules.kinematics.motion_in_one_dimension.notes": notes } };
      break;
    case "kinematics.motion_in_two_dimensions":
      value = { $set: { "lesson_modules.kinematics.motion_in_two_dimensions.notes": notes } };
      break;
    case "kinematics.simple_motion_in_one_dimension":
      value = { $set: { "lesson_modules.kinematics.simple_motion_in_one_dimension.notes": notes } };
      break;
    case "kinematics.simple_motion_in_two_dimensions":
      value = { $set: { "lesson_modules.kinematics.simple_motion_in_two_dimensions.notes": notes } };
      break;
    // Forces
    case "forces.friction_drag":
      value = { $set: { "lesson_modules.forces.friction_drag.notes": notes } };
      break;
    case "forces.newtons_laws":
      value = { $set: { "lesson_modules.forces.newtons_laws.notes": notes } };
      break;
    case "forces.simple_forces":
      value = { $set: { "lesson_modules.forces.simple_forces.notes": notes } };
      break;
    // Energy
    case "energy.conservative_forces":
      value = { $set: { "lesson_modules.energy.conservative_forces.notes": notes } };
      break;
    case "energy.energy_conservation_work":
      value = { $set: { "lesson_modules.energy.energy_conservation_work.notes": notes } };
      break;
    case "energy.power":
      value = { $set: { "lesson_modules.energy.power.notes": notes } };
      break;
    case "energy.work_potential_energy":
      value = { $set: { "lesson_modules.energy.work_potential_energy.notes": notes } };
      break;
    // Momentum
    case "momentum.elastic_collisions":
      value = { $set: { "lesson_modules.momentum.elastic_collisions.notes": notes } };
      break;
    case "momentum.explosions":
      value = { $set: { "lesson_modules.momentum.explosions.notes": notes } };
      break;
    case "momentum.momentum_conservation":
      value = { $set: { "lesson_modules.momentum.momentum_conservation.notes": notes } };
      break;
    // Simple Harmonic Motion
    case "simple_harmonic_motion.damped_harmonic_motion":
      value = { $set: { "lesson_modules.simple_harmonic_motion.damped_harmonic_motion.notes": notes } };
      break;
    case "simple_harmonic_motion.driven_oscillations":
      value = { $set: { "lesson_modules.simple_harmonic_motion.driven_oscillations.notes": notes } };
      break;
    case "simple_harmonic_motion.dynamics_simple_harmonic_motion":
      value = { $set: { "lesson_modules.simple_harmonic_motion.dynamics_simple_harmonic_motion.notes": notes } };
      break;
    case "simple_harmonic_motion.the_pendulum":
      value = { $set: { "lesson_modules.simple_harmonic_motion.the_pendulum.notes": notes } };
      break;
    // Waves
    case "waves.characteristics_waves":
      value = { $set: { "lesson_modules.waves.characteristics_waves.notes": notes } };
      break;
    case "waves.interference":
      value = { $set: { "lesson_modules.waves.interference.notes": notes } };
      break;
    case "waves.superposition_of_waves":
      value = { $set: { "lesson_modules.waves.superposition_of_waves.notes": notes } };
      break;
    // Fluids
    case "fluids.buoyancy":
      value = { $set: { "lesson_modules.fluids.buoyancy.notes": notes } };
      break;
    case "fluids.continuity":
      value = { $set: { "lesson_modules.fluids.continuity.notes": notes } };
      break;
    case "fluids.fluid_statics":
      value = { $set: { "lesson_modules.fluids.fluid_statics.notes": notes } };
      break;
    case "fluids.fluid_dynamics":
      value = { $set: { "lesson_modules.fluids.fluid_dynamics.notes": notes } };
      break;
    case "fluids.incompressible_fluids":
      value = { $set: { "lesson_modules.fluids.incompressible_fluids.notes": notes } };
      break;
    case "fluids.pressure":
      value = { $set: { "lesson_modules.fluids.pressure.notes": notes } };
  }
  return value;
}

// TODO - move these help functions to their own module
function mapTime(key, time) {
  var value;
  switch (key) {
    // Kinematics
    case "kinematics.motion_in_one_dimension":
      value = { $set: { "lesson_modules.kinematics.motion_in_one_dimension.updated": time } };
      break;
    case "kinematics.motion_in_two_dimensions":
      value = { $set: { "lesson_modules.kinematics.motion_in_two_dimensions.updated": time } };
      break;
    case "kinematics.simple_motion_in_one_dimension":
      value = { $set: { "lesson_modules.kinematics.simple_motion_in_one_dimension.updated": time } };
      break;
    case "kinematics.simple_motion_in_two_dimensions":
      value = { $set: { "lesson_modules.kinematics.simple_motion_in_two_dimensions.updated": time } };
      break;
    // Forces
    case "forces.friction_drag":
      value = { $set: { "lesson_modules.forces.friction_drag.updated": time } };
      break;
    case "forces.newtons_laws":
      value = { $set: { "lesson_modules.forces.newtons_laws.updated": time } };
      break;
    case "forces.simple_forces":
      value = { $set: { "lesson_modules.forces.simple_forces.updated": time } };
      break;
    // Energy
    case "energy.conservative_forces":
      value = { $set: { "lesson_modules.energy.conservative_forces.updated": time } };
      break;
    case "energy.energy_conservation_work":
      value = { $set: { "lesson_modules.energy.energy_conservation_work.updated": time } };
      break;
    case "energy.power":
      value = { $set: { "lesson_modules.energy.power.updated": time } };
      break;
    case "energy.work_potential_energy":
      value = { $set: { "lesson_modules.energy.work_potential_energy.updated": time } };
      break;
    // Momentum
    case "momentum.elastic_collisions":
      value = { $set: { "lesson_modules.momentum.elastic_collisions.updated": time } };
      break;
    case "momentum.explosions":
      value = { $set: { "lesson_modules.momentum.explosions.updated": time } };
      break;
    case "momentum.momentum_conservation":
      value = { $set: { "lesson_modules.momentum.momentum_conservation.updated": time } };
      break;
    // Simple Harmonic Motion
    case "simple_harmonic_motion.damped_harmonic_motion":
      value = { $set: { "lesson_modules.simple_harmonic_motion.damped_harmonic_motion.updated": time } };
      break;
    case "simple_harmonic_motion.driven_oscillations":
      value = { $set: { "lesson_modules.simple_harmonic_motion.driven_oscillations.updated": time } };
      break;
    case "simple_harmonic_motion.dynamics_simple_harmonic_motion":
      value = { $set: { "lesson_modules.simple_harmonic_motion.dynamics_simple_harmonic_motion.updated": time } };
      break;
    case "simple_harmonic_motion.the_pendulum":
      value = { $set: { "lesson_modules.simple_harmonic_motion.the_pendulum.updated": time } };
      break;
    // Waves
    case "waves.characteristics_waves":
      value = { $set: { "lesson_modules.waves.characteristics_waves.updated": time } };
      break;
    case "waves.interference":
      value = { $set: { "lesson_modules.waves.interference.updated": time } };
      break;
    case "waves.superposition_of_waves":
      value = { $set: { "lesson_modules.waves.superposition_of_waves.updated": time } };
      break;
    // Fluids
    case "fluids.buoyancy":
      value = { $set: { "lesson_modules.fluids.buoyancy.updated": time } };
      break;
    case "fluids.continuity":
      value = { $set: { "lesson_modules.fluids.continuity.updated": time } };
      break;
    case "fluids.fluid_statics":
      value = { $set: { "lesson_modules.fluids.fluid_statics.updated": time } };
      break;
    case "fluids.fluid_dynamics":
      value = { $set: { "lesson_modules.fluids.fluid_dynamics.updated": time } };
      break;
    case "fluids.incompressible_fluids":
      value = { $set: { "lesson_modules.fluids.incompressible_fluids.updated": time } };
      break;
    case "fluids.pressure":
      value = { $set: { "lesson_modules.fluids.pressure.updated": time } };
  }
  return value;
}

// Updates the updated field to be the current time
// Sample request: curl --header "Content-Type: application/json" --data '{"username":"paul.le@interfaceware.com", "lessonPath":"forces.friction_drag"}' http://localhost:8080/update_time
router.post('/update_time', (req, res) => {
  Lessons.find({username: req.body.username}, function(err, lessons) {
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      mapTime(req.body.lessonPath, new Date()),
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
// Sample request: curl --header "Content-Type: application/json" --data '{"username":"paul.le@interfaceware.com"}' http://localhost:8080/user_lessons
router.post('/user_lessons', (req, res) => {
  Lessons.find({username: req.body.username}, function(err, lessons) {
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
// Sample request: curl --header "Content-Type: application/json" --data '{"username":"paul.le@interfaceware.com", "lessonPath":"forces.friction_drag", "status": true}' http://localhost:8080/update_lesson_status
router.post('/update_lesson_status', (req, res) => {
  Lessons.find({username: req.body.username}, function(err, lessons) {
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      mapLessons(req.body.lessonPath, req.body.status),
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
// Sample request: curl --header "Content-Type: application/json" --data '{"username":"paul.le@interfaceware.com", "lessonPath":"forces.friction_drag", "notes": "Hello world note"}' http://localhost:8080/update_notes
router.post('/update_notes', (req, res) => {
  Lessons.find({username: req.body.username}, function(err, lessons) {
    Lessons.findByIdAndUpdate(
      lessons[0]._id,
      mapNotes(req.body.lessonPath, req.body.notes),
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
// Sample request: curl --header "Content-Type: application/json" --data '{"username":"paul.le@interfaceware.com"}' http://localhost:8080/get_lessons
router.post('/get_lessons', (req,  res) => {

  //  Loop through each lesson lesson module
  //    For each lesson module, get the most recently accessed lesson
  //  Loop through each lesson module and get the most recently accessed lesson

  Lessons.find({username: req.body.username}, function(err, lessons) {
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
// Sample request: curl --header "Content-Type: application/json" --data '{"username":"paul.le@interfaceware.com", "lesson":"kinematics"}' http://localhost:8080/get_lesson_progress
router.post('/get_lesson_progress', (req, res) => {
  Lessons.find({username: req.body.username}, function(err, lessons) {
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

module.exports = router;
