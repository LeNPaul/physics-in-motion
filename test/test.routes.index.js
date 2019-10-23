var should = require('should');
var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
var app = require('../app.js');

describe('Route API', () => {

  it('return the home page', (done) => {
    chai.request(app).get('/').end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

});
