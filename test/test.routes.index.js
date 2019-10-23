var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = require('../app.js');

chai.use(chaiHttp);

describe('index routes', () => {

  it('return the home page', (done) => {
    chai.request(app).get('/').end((err, res) => {
      res.should.have.status(200);
      res.text.length.should.be.eql(5348);
    });
    done();
  });

});

describe('about routes', () => {

  it('return the about page', (done) => {
    chai.request(app).get('/about').end((err, res) => {
      res.should.have.status(200);
      res.text.length.should.be.eql(4559);
    });
    done();
  });

});
