var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = require('../app.js');

chai.use(chaiHttp);

describe('lesson_data endpoint', () => {

  it('return unsuccessful request', (done) => {
    chai.request(app).get('/lesson_data').end((err, res) => {
      res.should.have.status(500);
    });
    done();
  });

});
