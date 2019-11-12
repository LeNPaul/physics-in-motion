var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = 'http://localhost:8080'
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

chai.use(chaiHttp);

describe('routes/index.js endpoints', () => {

  describe('/ endpoint', () => {
    it('return the home page', (done) => {
      chai.request(app).get('/').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5348);
      });
      done();
    });
  });

  describe('/about endpoint', () => {
    it('return the about page', (done) => {
      chai.request(app).get('/about').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4559);
      });
      done();
    });
  });

  describe('/contact endpoint', () => {
    it('return the contact page', (done) => {
      chai.request(app).get('/contact').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(3553);
      });
      done();
    });
  });

  describe('/privacy endpoint', () => {
    it('return the privacy page', (done) => {
      chai.request(app).get('/privacy').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(11086);
      });
      done();
    });
  });

  describe('/terms endpoint', () => {
    it('return the terms page', (done) => {
      chai.request(app).get('/terms').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(7858);
      });
      done();
    });
  });

  describe('/courses', () => {
    it('return the courses page', (done) => {
      chai.request(app).get('/courses').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5056);
      });
      done();
    });
  });

  describe('/classical-mechanics', () => {
    it('return the classical-mechanics page', (done) => {
      chai.request(app).get('/classical-mechanics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(7309);
      });
      done();
    });
  });

  describe('/kinematics', () => {
    it('return the kinematics page', (done) => {
      chai.request(app).get('/kinematics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4482);
      });
      done();
    });
  });

  describe('/forces', () => {
    it('return the forces page', (done) => {
      chai.request(app).get('/forces').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4279);
      });
      done();
    });
  });

  describe('/energy', () => {
    it('return the energy page', (done) => {
      chai.request(app).get('/energy').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4404);
      });
      done();
    });
  });

  describe('/momentum', () => {
    it('return the momentum page', (done) => {
      chai.request(app).get('/momentum').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4302);
      });
      done();
    });
  });

  describe('/simple-harmonic-motion', () => {
    it('return the simple-harmonic-motion page', (done) => {
      chai.request(app).get('/simple-harmonic-motion').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4436);
      });
      done();
    });
  });

  describe('/waves', () => {
    it('return the waves page', (done) => {
      chai.request(app).get('/waves').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4311);
      });
      done();
    });
  });

  describe('/fluids', () => {
    it('return the fluids page', (done) => {
      chai.request(app).get('/fluids').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4425);
      });
      done();
    });
  });

  describe('/mathematics', () => {
    it('return the mathematics page', (done) => {
      chai.request(app).get('/mathematics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5106);
      });
      done();
    });
  });

  describe('/algebra', () => {
    it('return the algebra page', (done) => {
      chai.request(app).get('/algebra').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4358);
      });
      done();
    });
  });

  describe('/geometry', () => {
    it('return the geometry page', (done) => {
      chai.request(app).get('/geometry').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4554);
      });
      done();
    });
  });

  describe('/calculus', () => {
    it('return the calculus page', (done) => {
      chai.request(app).get('/calculus').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4244);
      });
      done();
    });
  });

  describe('/resources', () => {
    it('return the resources page', (done) => {
      chai.request(app).get('/resources').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(8500);
      });
      done();
    });
  });

  var agent = chai.request.agent(app);

  describe('/login endpoint', () => {
    it('log into user account', (done) => {
      agent.post('/login').send(user).end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
    });
  });

  describe('/notes/:course', () => {
    for(let i = 0; i < lessons.length; i++) {
      describe('/notes/' + lessons[i][0], () => {
        it('requesting /notes/' + lessons[i][0] + ' without session cooke should not return user data', (done) => {
          chai.request(app).get('/notes/' + lessons[i][0]).end((err, res) => {
            res.status.should.be.equal(200);
            done();
          });
        });
        it('get user lesson notes for /notes/' + lessons[i][0], (done) => {
          agent.get('/notes/' + lessons[i][0]).end((err, res) => {
            res.status.should.be.equal(200);
            done();
          });
        });
      });
    };
  });

  agent.close();

});
