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

  var agent = chai.request.agent(app);

  describe('/login endpoint', () => {
    it('log into user account', (done) => {
      agent.post('/login').send(user).end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
    });
  });

  describe('/ endpoint', () => {
    it('return the home page with user not logged in', (done) => {
      chai.request(app).get('/').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5348);
      });
      done();
    });
    it('return the home page with user logged in', (done) => {
      agent.get('/').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(6537);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/about endpoint', () => {
    it('return the about page with user not logged in', (done) => {
      chai.request(app).get('/about').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4559);
      });
      done();
    });
    it('return the about page with user logged in', (done) => {
      agent.get('/about').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4813);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/contact endpoint', () => {
    it('return the contact page with user not logged in', (done) => {
      chai.request(app).get('/contact').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(3553);
      });
      done();
    });
    it('return the contact page with user logged in', (done) => {
      agent.get('/contact').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(3807);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/privacy endpoint', () => {
    it('return the privacy page with user not logged in', (done) => {
      chai.request(app).get('/privacy').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(11086);
      });
      done();
    });
    it('return the privacy page with user logged in', (done) => {
      agent.get('/privacy').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(11340);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/terms endpoint', () => {
    it('return the terms page with user not logged in', (done) => {
      chai.request(app).get('/terms').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(7858);
      });
      done();
    });
    it('return the terms page with user logged in', (done) => {
      agent.get('/terms').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(8112);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/courses', () => {
    it('return the courses page with user not logged in', (done) => {
      chai.request(app).get('/courses').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5056);
      });
      done();
    });
    it('return the courses page with user logged in', (done) => {
      agent.get('/courses').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5310);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/classical-mechanics', () => {
    it('return the classical-mechanics page with user not logged in', (done) => {
      chai.request(app).get('/classical-mechanics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(7309);
      });
      done();
    });
    it('return the classical-mechanics page with user logged in', (done) => {
      agent.get('/classical-mechanics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(7563);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/kinematics', () => {
    it('return the kinematics page with user not logged in', (done) => {
      chai.request(app).get('/kinematics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4482);
      });
      done();
    });
    it('return the kinematics page with user logged in', (done) => {
      agent.get('/kinematics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5495);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/forces', () => {
    it('return the forces page with user not logged in', (done) => {
      chai.request(app).get('/forces').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4279);
      });
      done();
    });
    it('return the forces page with user logged in', (done) => {
      agent.get('/forces').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5292);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/energy', () => {
    it('return the energy page with user not logged in', (done) => {
      chai.request(app).get('/energy').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4404);
      });
      done();
    });
    it('return the energy page with user logged in', (done) => {
      agent.get('/energy').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5417);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/momentum', () => {
    it('return the momentum page with user not logged in', (done) => {
      chai.request(app).get('/momentum').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4302);
      });
      done();
    });
    it('return the momentum page with user logged in', (done) => {
      agent.get('/momentum').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5315);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/simple-harmonic-motion', () => {
    it('return the simple-harmonic-motion page with user not logged in', (done) => {
      chai.request(app).get('/simple-harmonic-motion').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4436);
      });
      done();
    });
    it('return the simple-harmonic-motion page with user logged in', (done) => {
      agent.get('/simple-harmonic-motion').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5449);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/waves', () => {
    it('return the waves page with user not logged in', (done) => {
      chai.request(app).get('/waves').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4311);
      });
      done();
    });
    it('return the waves page with user logged in', (done) => {
      agent.get('/waves').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5324);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/fluids', () => {
    it('return the fluids page with user not logged in', (done) => {
      chai.request(app).get('/fluids').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4425);
      });
      done();
    });
    it('return the fluids page with user logged in', (done) => {
      agent.get('/fluids').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5438);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/mathematics', () => {
    it('return the mathematics page with user not logged in', (done) => {
      chai.request(app).get('/mathematics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5106);
      });
      done();
    });
    it('return the mathematics page with user logged in', (done) => {
      agent.get('/mathematics').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5360);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/algebra', () => {
    it('return the algebra page with user not logged in', (done) => {
      chai.request(app).get('/algebra').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4358);
      });
      done();
    });
    it('return the algebra page with user logged in', (done) => {
      agent.get('/algebra').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5371);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/geometry', () => {
    it('return the geometry page with user not logged in', (done) => {
      chai.request(app).get('/geometry').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4554);
      });
      done();
    });
    it('return the geometry page with user logged in', (done) => {
      agent.get('/geometry').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5567);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/calculus', () => {
    it('return the calculus page with user not logged in', (done) => {
      chai.request(app).get('/calculus').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(4244);
      });
      done();
    });
    it('return the calculus page with user logged in', (done) => {
      agent.get('/calculus').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(5257);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
    });
  });

  describe('/resources', () => {
    it('return the resources page with user not logged in', (done) => {
      chai.request(app).get('/resources').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(8500);
      });
      done();
    });
    it('return the resources page with user logged in', (done) => {
      agent.get('/resources').end((err, res) => {
        res.status.should.be.equal(200);
        res.text.length.should.be.eql(8754);
        res.text.includes('Logged in as').should.be.equal(true);
        res.text.includes('Logout').should.be.equal(true);
      });
      done();
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
            console.log(res);
            res.status.should.be.equal(200);
            done();
          });
        });
      });
    };
  });

  agent.close();

});
