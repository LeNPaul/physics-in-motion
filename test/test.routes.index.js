var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = 'http://localhost:8080'

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

  describe('/notes/:course', () => {

  });

  describe('/courses', () => {

  });

  describe('/classical-mechanics', () => {

  });

  describe('/kinematics', () => {

  });

  describe('/forces', () => {

  });

  describe('/energy', () => {

  });

  describe('/momentum', () => {

  });

  describe('/simple-harmonic-motion', () => {

  });

  describe('/waves', () => {

  });

  describe('/fluids', () => {

  });

  describe('/mathematics', () => {

  });

  describe('/algebra', () => {

  });

  describe('/geometry', () => {

  });

  describe('/calculus', () => {

  });

  describe('/resources', () => {

  });

});
