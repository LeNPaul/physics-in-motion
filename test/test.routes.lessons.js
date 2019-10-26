var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = 'http://localhost:8080';
var user = {username: 'test@email.com', password: 'password'};

chai.use(chaiHttp);

describe('/lesson_data endpoint', () => {
  it('requesting /lesson_data without sesssion cooke should not return user data', (done) => {
    chai.request(app).get('/lesson_data').end((err, res) => {
      res.status.should.be.equal(500);
      done();
    });
  });
  it('requesting /lesson_data with sesssion cooke should return user data', (done) => {
    var agent = chai.request.agent(app)
    agent.post('/login').send(user).end((err, res) => {
      agent.get('/lesson_data').end((err, res) => {
        res.status.should.be.equal(200);
        res.body[0].should.have.property('lesson_modules');
        done();
      });
    });
    agent.close();
  });
});

describe('/recent_lessons endpoint', () => {
  it('requesting /recent_lessons without sesssion cooke should not return user data', (done) => {
    chai.request(app).get('/recent_lessons').end((err, res) => {
      res.status.should.be.equal(500);
      done();
    });
  });
  it('requesting /recent_lessons with sesssion cooke should return user data', (done) => {
    var agent = chai.request.agent(app)
    agent.post('/login').send(user).end((err, res) => {
      agent.get('/recent_lessons').end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.lengthOf(7);
        done();
      });
    });
    agent.close();
  });
});

// Test workflow where lesson progress is updated and then immediately checked to make sure the value is the same
describe('/lesson_progress/:lesson endpoints', () => {
  var lessons = ['kinematics', 'forces', 'energy', 'momentum', 'simple_harmonic_motion', 'waves', 'fluids']
  for(let i = 0; i < lessons.length; i++) {
    it('requesting /lesson_progress/' + lessons[i] + ' without sesssion cooke should not return user data', (done) => {
      chai.request(app).get('/lesson_progress/' + lessons[i]).end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });
    var agent = chai.request.agent(app)
    it('requesting /lesson_progress/' + lessons[i] + ' with sesssion cooke should return user data', (done) => {
      agent.post('/login').send(user).end((err, res) => {
        agent.get('/lesson_progress/' + lessons[i]).end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.have.property('progress');
          res.body.progress.should.be.equal(0);
          done();
        });
      });
    });
    agent.close();
  }
});

describe('/notes/:lesson/data endpoints', () => {
  var lessons = ['kinematics', 'forces', 'energy', 'momentum', 'simple_harmonic_motion', 'waves', 'fluids']
  for(let i = 0; i < lessons.length; i++) {
    it('requesting /notes/' + lessons[i] + '/data without sesssion cooke should not return user data', (done) => {
      chai.request(app).get('/notes/' + lessons[i] + '/data').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });
    var agent = chai.request.agent(app)
    it('requesting /notes/' + lessons[i] + '/data with sesssion cooke should return user data', (done) => {
      agent.post('/login').send(user).end((err, res) => {
        agent.get('/notes/' + lessons[i] + '/data').end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.be.Object();
          done();
        });
      });
    });
    agent.close();
  }
});
