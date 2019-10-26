var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = 'http://localhost:8080'

chai.use(chaiHttp);

describe('lesson_data endpoint', () => {

  it('return unsuccessful request', (done) => {
    chai.request(app).get('/lesson_data').end((err, res) => {
      res.status.should.be.equal(500);
    });
    done();
  });

});

describe('recent_lessons endpoint', () => {

  it('return unsuccessful request', (done) => {
    chai.request(app).get('/recent_lessons').end((err, res) => {
      res.status.should.be.equal(500);
    });
    done();
  });

});

describe('lesson_progress endpoints', () => {

  it('return unsuccessful request', (done) => {
    chai.request(app).get('/lesson_progress/kinematics').end((err, res) => {
      res.status.should.be.equal(500);
    });
    done();
  });

});
