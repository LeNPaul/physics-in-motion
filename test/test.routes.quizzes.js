var should = require('should');
var assert = require('assert');
var chai = require('chai'), chaiHttp = require('chai-http');
var app = 'http://localhost:8080';
var user = {username: 'test@email.com', password: 'password'};

chai.use(chaiHttp);

describe('routes/quizzes.js endpoints', () => {

  var agent = chai.request.agent(app);

  describe('/login endpoint', () => {
    it('log into user account', (done) => {
      agent.post('/login').send(user).end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
    });
  });

  describe('/questions endpoint', () => {

    it('requesting /questions without session cookie should not return user data', (done) => {
      chai.request(app).get('/questions').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });

    it('requesting /questions with session cookie should return user data', (done) => {
      chai.request(app).get('/questions').end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.lengthOf(5);
        done();
      });
    });

  });

  describe('/answers endpoint', () => {

    it('requesting /answers without session cookie should not return user data', (done) => {
      chai.request(app).get('/answers').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });

    it('requesting /answers with session cookie should return user data', (done) => {
      chai.request(app).get('/answers').end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.lengthOf(5);
        done();
      });
    });

  });

  describe('/submit_response endpoint', () => {

    it('requesting /submit_response without session cookie should not return user data', (done) => {
      chai.request(app).post('/submit_response').end((err, res) => {
        res.status.should.be.equal(500);
        done();
      });
    });

    it('requesting /submit_response with session cookie should return user data', (done) => {
      chai.request(app).post('/submit_response').end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.have.property('success');
        done();
      });
    });

    // Loop through each quiz question
    //  Submitting a correct response should return true
    //  Submitting an incorrect response should return false

  });

  agent.close();

});
