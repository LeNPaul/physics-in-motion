var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = 'http://localhost:8080';
var user = {username: 'test@email.com', password: 'password'};
var lessons = [
  [
    'kinematics',
    [
      'motion_in_one_dimension',
      'motion_in_two_dimensions',
      'simple_motion_in_one_dimension',
      'simple_motion_in_two_dimensions'
    ]
  ],
  [
    'forces',
    [
      'friction_drag',
      'newtons_laws',
      'simple_forces'
    ]
  ],
  [
    'energy',
    [
      'conservative_forces',
      'energy_conservation_work',
      'power',
      'work_potential_energy'
    ]
  ],
  [
    'momentum',
    [
      'elastic_collisions',
      'explosions',
      'momentum_conservation'
    ]
  ],
  [
    'simple_harmonic_motion',
    [
      'damped_harmonic_motion',
      'driven_oscillations',
      'dynamics_simple_harmonic_motion',
      'the_pendulum'
    ]
  ],
  [
    'waves',
    [
      'characteristics_waves',
      'interference',
      'superposition_of_waves'
    ]
  ],
  [
    'fluids',
    [
      'buoyancy',
      'continuity',
      'fluid_statics',
      'fluid_dynamics',
      'incompressible_fluids',
      'pressure'
    ]
  ]
]
var notes = '`1234567890-=	qwertyuiop[]\\asdfghjkl;’zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:”ZXCVBNM<>?';

chai.use(chaiHttp);

// Endpoints that are tested:
//    /lesson_data
//      - request without session cooke should not return user data
//      - requesting with session cooke should return
//        - an array with length of 1
//        - one element with property of lesson_modules and username
//        - lesson_modules should have all of the lessons
//    /recent_lessons
//    /lesson_progress/:lesson
//    /notes/:lesson/data
//    /update_lesson_time
//    /update_lesson_status
//    /update_lesson_notes

describe('Lessons endpoints', () => {

  var agent = chai.request.agent(app);

  describe('/login endpoint', () => {
    it('log into user account', (done) => {
      agent.post('/login').send(user).end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
    });
  });

  describe('/lesson_data endpoint', () => {
    it('requesting /lesson_data without session cooke should not return user data', (done) => {
      chai.request(app).get('/lesson_data').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });
    it('requesting /lesson_data with session cooke should return user data', (done) => {
      agent.get('/lesson_data').end((err, res) => {
        console.log(res.body[0]);
        res.status.should.be.equal(200);
        res.body[0].should.have.property('lesson_modules');
        done();
      });
    });
  });

  describe('/recent_lessons endpoint', () => {
    it('requesting /recent_lessons without session cooke should not return user data', (done) => {
      chai.request(app).get('/recent_lessons').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });
    it('requesting /recent_lessons with session cooke should return user data', (done) => {
      agent.get('/recent_lessons').end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.lengthOf(lessons.length);
        done();
      });
    });
  });

  // Test workflow between /lesson_progress/:lesson and /update_lesson_status
  describe('/lesson_progress/:lesson endpoints', () => {
    for(let i = 0; i < lessons.length; i++) {
      describe('/lesson_progress/' + lessons[i][0], () => {
        it('requesting /lesson_progress/' + lessons[i][0] + ' without session cooke should not return user data', (done) => {
          chai.request(app).get('/lesson_progress/' + lessons[i][0]).end((err, res) => {
            res.status.should.be.equal(500);
            done();
          });
        });
        describe('revert back to default state with no progress for lesson module', () => {
          for(let j=0; j < lessons[i][1].length; j++) {
            it('/update_lesson_status for ' + lessons[i][1][j] + ' to be false', (done) => {
              agent.post('/update_lesson_status').send({lessonPath: lessons[i][0] + '.' + lessons[i][1][j], status: false}).end((err, res) => {
                res.status.should.be.equal(200);
                done();
              });
            });
          }
        });
        describe('testing lesson progress functionality for ' + lessons[i][0], () => {
          for(let j=0; j < lessons[i][1].length; j++) {
            it('/update_lesson_status for ' + lessons[i][1][j] + ' to be true', (done) => {
              agent.post('/update_lesson_status').send({lessonPath: lessons[i][0] + '.' + lessons[i][1][j], status: true}).end((err, res) => {
                res.status.should.be.equal(200);
                done();
              });
            });
            it('/lesson_progress/' + lessons[i][0] + ' should return ' + ((j + 1) / lessons[i][1].length), (done) => {
              agent.get('/lesson_progress/' + lessons[i][0]).end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.have.property('progress');
                res.body.progress.should.be.equal((j + 1) / lessons[i][1].length);
                done();
              });
            });
          }
        });
        describe('revert back to previous state', () => {
          for(let j=0; j < lessons[i][1].length; j++) {
            it('/update_lesson_status for ' + lessons[i][1][j] + ' to be false', (done) => {
              agent.post('/update_lesson_status').send({lessonPath: lessons[i][0] + '.' + lessons[i][1][j], status: false}).end((err, res) => {
                res.status.should.be.equal(200);
                done();
              });
            });
          }
        });
      });
    }
  });

  // Test workflow between /notes/:lesson/data and /update_lesson_notes
  describe('/notes/:lesson/data endpoints', () => {
    for(let i = 0; i < lessons.length; i++) {
      describe('/notes/' + lessons[i][0] + '/data', () => {
        it('requesting /notes/' + lessons[i][0] + '/data without session cooke should not return user data', (done) => {
          chai.request(app).get('/notes/' + lessons[i][0] + '/data').end((err, res) => {
            res.status.should.be.equal(500);
            done();
          });
        });
        describe('testing lesson note functionality for ' + lessons[i][0], () => {
          for(let j = 0; j < lessons[i][1].length; j++) {
            it('update notes for ' + lessons[i][0] + '.' + lessons[i][1][j], (done) => {
                agent.post('/update_lesson_notes').send({lessonPath:lessons[i][0] + '.' + lessons[i][1][j], notes:notes}).end((err, res) => {
                  done();
                });
            });
            it('check that /notes/' + lessons[i][0] + '/data returns the correct user data', (done) => {
              agent.get('/notes/' + lessons[i][0] + '/data').end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.be.Object();
                for(let j = 0; j < lessons[i][1].length; j++) {
                  res.body[lessons[i][1][j]].notes.should.be.equal(notes);
                }
                done();
              });
            });
          }
        });
      });
    }
  });

  // Test workflow between /update_lesson_time and /recent_lessons
  describe('/update_lesson_time endpoints', () => {
    for(let i = 0; i < lessons.length; i++) {
      describe('/update_lesson_time for ' + lessons[i][0] + ' lessons', () => {
        for(let j = 0; j < lessons[i][1].length; j++) {
          describe('/update_lesson_time for ' + lessons[i][0] + '.' + lessons[i][1][j] + ' lesson modules', () => {
            it('requesting /update_lesson_time for ' + lessons[i][0] + '.' + lessons[i][1][j] + ' without session cooke should not return user data', (done) => {
              chai.request(app).post('/update_lesson_time').send({lessonPath:lessons[i][0] + '.' + lessons[i][1][j]}).end((err, res) => {
                res.status.should.be.equal(500);
                done();
              });
            });
            it('update lesson time for ' + lessons[i][0] + '.' + lessons[i][1][j], (done) => {
              agent.post('/update_lesson_time').send({lessonPath:lessons[i][0] + '.' + lessons[i][1][j]}).end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.be.Object();
                done();
              });
            });
            it('/recent_lessons should return ' + lessons[i][0] + '.' + lessons[i][1][j] + ' as the most recent accessed lesson module', (done) => {
              agent.get('/recent_lessons').end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.have.lengthOf(lessons.length);
                res.body[0][0].should.be.equal(lessons[i][0]);
                res.body[0][1].should.be.equal(lessons[i][1][j]);
                done();
              });
            });
          });
        }
      })
    }
  });

  agent.close();

});
