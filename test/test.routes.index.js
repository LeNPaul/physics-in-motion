var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = require('../app.js');

chai.use(chaiHttp);

describe('index routes', () => {

  it('return the home page', (done) => {
    chai.request(app).get('/').end((err, res) => {
      res.status.should.be.equal(200);
      res.text.length.should.be.eql(5348);
    });
    done();
  });

});

describe('about routes', () => {

  it('return the about page', (done) => {
    chai.request(app).get('/about').end((err, res) => {
      res.status.should.be.equal(200);
      res.text.length.should.be.eql(4559);
    });
    done();
  });

});

describe('contact routes', () => {

  it('return the contact page', (done) => {
    chai.request(app).get('/contact').end((err, res) => {
      res.status.should.be.equal(200);
      res.text.length.should.be.eql(3553);
    });
    done();
  });

});

describe('privacy routes', () => {

  it('return the privacy page', (done) => {
    chai.request(app).get('/privacy').end((err, res) => {
      res.status.should.be.equal(200);
      res.text.length.should.be.eql(11086);
    });
    done();
  });

});

describe('terms routes', () => {

  it('return the terms page', (done) => {
    chai.request(app).get('/terms').end((err, res) => {
      res.status.should.be.equal(200);
      res.text.length.should.be.eql(7858);
    });
    done();
  });

});
