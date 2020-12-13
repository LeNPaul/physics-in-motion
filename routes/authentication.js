const express = require('express');
const router = express.Router();
const passport = require('passport');
const Account = require('../models/account');
const Lessons = require('../models/lessons');
const Quizzes = require('../models/quizzes');

// Temporary location to store quiz information
var quizzes = [
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '1'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '2'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '3'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '4'},
  {module_name: 'fluids', lesson_name: 'buoyancy', question_id: '5'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '6'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '7'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '8'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '9'},
  {module_name: 'fluids', lesson_name: 'continuity', question_id: '10'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '11'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '12'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '13'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '14'},
  {module_name: 'fluids', lesson_name: 'fluid_statics', question_id: '15'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '16'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '17'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '18'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '19'},
  {module_name: 'fluids', lesson_name: 'fluid_dynamics', question_id: '20'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '26'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '27'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '28'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '29'},
  {module_name: 'fluids', lesson_name: 'pressure', question_id: '30'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '31'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '32'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '33'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '34'},
  {module_name: 'waves', lesson_name: 'characteristics_waves', question_id: '35'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '36'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '37'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '38'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '39'},
  {module_name: 'waves', lesson_name: 'interference', question_id: '40'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '41'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '42'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '43'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '44'},
  {module_name: 'waves', lesson_name: 'superposition_of_waves', question_id: '45'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '46'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '47'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '48'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '49'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'damped_harmonic_motion', question_id: '50'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '51'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '52'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '53'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '54'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'driven_oscillations', question_id: '55'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '56'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '57'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '58'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '59'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'dynamics_simple_harmonic_motion', question_id: '60'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '61'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '62'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '63'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '64'},
  {module_name: 'simple_harmonic_motion', lesson_name: 'the_pendulum', question_id: '65'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '66'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '67'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '68'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '69'},
  {module_name: 'kinematics', lesson_name: 'motion_in_one_dimension', question_id: '70'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '71'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '72'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '73'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '74'},
  {module_name: 'kinematics', lesson_name: 'motion_in_two_dimensions', question_id: '75'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '76'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '77'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '78'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '79'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_one_dimension', question_id: '80'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '81'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '82'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '83'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '84'},
  {module_name: 'kinematics', lesson_name: 'simple_motion_in_two_dimensions', question_id: '85'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '86'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '87'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '88'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '89'},
  {module_name: 'energy', lesson_name: 'conservative_forces', question_id: '90'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '91'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '92'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '93'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '94'},
  {module_name: 'energy', lesson_name: 'energy_conservation_work', question_id: '95'},
  {module_name: 'energy', lesson_name: 'power', question_id: '96'},
  {module_name: 'energy', lesson_name: 'power', question_id: '97'},
  {module_name: 'energy', lesson_name: 'power', question_id: '98'},
  {module_name: 'energy', lesson_name: 'power', question_id: '99'},
  {module_name: 'energy', lesson_name: 'power', question_id: '100'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '101'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '102'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '103'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '104'},
  {module_name: 'energy', lesson_name: 'work_potential_energy', question_id: '105'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '106'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '107'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '108'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '109'},
  {module_name: 'forces', lesson_name: 'friction_drag', question_id: '110'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '111'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '112'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '113'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '114'},
  {module_name: 'forces', lesson_name: 'newtons_laws', question_id: '115'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '116'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '117'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '118'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '119'},
  {module_name: 'forces', lesson_name: 'simple_forces', question_id: '120'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '121'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '122'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '123'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '124'},
  {module_name: 'momentum', lesson_name: 'elastic_collisions', question_id: '125'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '126'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '127'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '128'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '129'},
  {module_name: 'momentum', lesson_name: 'explosions', question_id: '130'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '131'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '132'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '133'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '134'},
  {module_name: 'momentum', lesson_name: 'momentum_conservation', question_id: '135'},
]

// Temporary location to store lesson module information
var lessons = [
  {module_name: 'motion_in_one_dimension', lesson_name: 'position'},
  {module_name: 'motion_in_one_dimension', lesson_name: 'speed'},
  {module_name: 'motion_in_one_dimension', lesson_name: 'velocity'},
  {module_name: 'motion_in_one_dimension', lesson_name: 'acceleration'},
  {module_name: 'motion_in_one_dimension', lesson_name: 'special_cases'},
  {module_name: 'motion_in_two_dimensions', lesson_name: 'two_dimensional_position'},
  {module_name: 'motion_in_two_dimensions', lesson_name: 'two_dimensional_velocity'},
  {module_name: 'motion_in_two_dimensions', lesson_name: 'two_dimensional_acceleration'},
  {module_name: 'motion_in_two_dimensions', lesson_name: 'projectile_motion'},
  {module_name: 'forces_and_the_laws_of_motion', lesson_name: 'the_laws_of_motion'},
  {module_name: 'forces_and_the_laws_of_motion', lesson_name: 'the_first_law_of_motion'},
  {module_name: 'forces_and_the_laws_of_motion', lesson_name: 'the_second_law_of_motion'},
  {module_name: 'forces_and_the_laws_of_motion', lesson_name: 'the_third_law_of_motion'},
  {module_name: 'forces_and_the_laws_of_motion', lesson_name: 'common_forces'},
  {module_name: 'forces_and_the_laws_of_motion', lesson_name: 'friction_and_drag'},
  {module_name: 'circular_motion', lesson_name: 'circular_motion'},
  {module_name: 'work_and_energy', lesson_name: 'conservative_forces'},
  {module_name: 'work_and_energy', lesson_name: 'energy_conservation_and_work'},
  {module_name: 'work_and_energy', lesson_name: 'work_and_potential_energy'},
  {module_name: 'work_and_energy', lesson_name: 'power'},
  {module_name: 'linear_momentum_and_collisions', lesson_name: 'momentum_conservation'},
  {module_name: 'linear_momentum_and_collisions', lesson_name: 'elastic_collisions'},
  {module_name: 'linear_momentum_and_collisions', lesson_name: 'explosions'},
  {module_name: 'rotational_motion_and_angular_momentum', lesson_name: 'angular_variables'},
  {module_name: 'rotational_motion_and_angular_momentum', lesson_name: 'equations_of_rotational_motion'},
  {module_name: 'rotational_motion_and_angular_momentum', lesson_name: 'rotational_kinetic_energy'},
  {module_name: 'rotational_motion_and_angular_momentum', lesson_name: 'axis_theorems'},
  {module_name: 'rotational_motion_and_angular_momentum', lesson_name: 'torque'},
  {module_name: 'rotational_motion_and_angular_momentum', lesson_name: 'rotational_work_and_power'},
  {module_name: 'rotational_motion_and_angular_momentum', lesson_name: 'angular_momentum'},
  {module_name: 'oscillations', lesson_name: 'dynamics_simple_harmonic_motion'},
  {module_name: 'oscillations', lesson_name: 'the_pendulum'},
  {module_name: 'oscillations', lesson_name: 'damped_harmonic_motion'},
  {module_name: 'oscillations', lesson_name: 'driven_oscillations'},
  {module_name: 'waves_and_sounds', lesson_name: 'characteristics_of_waves'},
  {module_name: 'waves_and_sounds', lesson_name: 'superposition_of_waves'},
  {module_name: 'waves_and_sounds', lesson_name: 'interference'},
  {module_name: 'electricity_and_magnetism', lesson_name: 'electric_charge'},
  {module_name: 'electricity_and_magnetism', lesson_name: 'electric_fields'},
  {module_name: 'electricity_and_magnetism', lesson_name: 'electric_potential'},
  {module_name: 'electricity_and_magnetism', lesson_name: 'magnetic_fields'},
  {module_name: 'electricity_and_magnetism', lesson_name: 'sources_of_magnetic_fields'},
  {module_name: 'fluid_mechanics', lesson_name: 'pressure'},
  {module_name: 'fluid_mechanics', lesson_name: 'buoyancy'},
  {module_name: 'fluid_mechanics', lesson_name: 'continuity'},
  {module_name: 'fluid_mechanics', lesson_name: 'fluid_statics'},
  {module_name: 'fluid_mechanics', lesson_name: 'fluid_dynamics'}
]

router.get('/register', (req, res) => {
    res.render('register', { });
});

router.post('/register', (req, res, next) => {
    var newDate = new Date();
    // Create user in database
    Account.register(new Account({
      username : req.body.username,
      email: '',
      name: '',
      gender: '',
      birthdate: '',
      address: '',
      last_login: newDate,
      date_joined: newDate,
      mark_deleted: ''
    }), req.body.password, (err, account) => {
        if (err) {
          return res.render('register', { error : err.message });
        }
        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });

    for(let i = 0; i < lessons.length; i++) {
      // Create lessons tracking in database
      var newLessons = new Lessons({
        username: req.body.username,
        module_name: lessons[i].module_name,
        lesson_name: lessons[i].lesson_name,
      })
      newLessons.save(function(err, data) {
        if (err) {
          // TODO - add proper error handling here
        }
      })
    }

    // Create quizzes tracking in database
    for(let i = 0; i < quizzes.length; i++) {
      var newQuiz = new Quizzes({
        username: req.body.username,
        module_name: quizzes[i].module_name,
        lesson_name: quizzes[i].lesson_name,
        question_id: quizzes[i].question_id
      })
      newQuiz.save(function(err, data) {
        if (err) {
          // TODO - add proper error handling here
        }
      })
    }
});

router.get('/login', (req, res) => {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        Account.find({username: req.session.passport.user}, function(err, account) {
          Account.findByIdAndUpdate(
            account[0]._id,
            {last_login: new Date()},
            {new: true},
            function(err, account) {
              if (err) {
                return next(err);
              }
              res.redirect('/');
            }
          )
        });
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.post('/delete', (req, res) => {
  // Delete user account based on username
});

module.exports = router;
