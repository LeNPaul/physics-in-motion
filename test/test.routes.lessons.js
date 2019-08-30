var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
const mongoose = require('mongoose');
let app = require('../app.js');
const Account = require("../models/account.js");
const Lessons = require("../models/lessons.js");

chai.use(chaiHttp);

describe('Lessons API', () => {

  before((done) => {
    const db = mongoose.connect('mongodb://localhost/test');
    done();
  });

  after((done) => {
    mongoose.connection.close();
    done();
  });

  beforeEach( (done) => {
    var account = new Account({
      username: '12345',
      password: 'testy'
    });
    var lesson = new Lessons({
      username: '12345'
    });
    account.save((error) => {
      if (error) console.log('error' + error.message);
      else console.log('no error');
    });
    lesson.save((error) => {
      if (error) console.log('error' + error.message);
      else console.log('no error');
    });
    done();
  });

  it('set updated field to current time', (done) => {
    chai.request(app).post('/update_lesson_time').send({username: "12345", lessonPath: "forces.friction_drag", notes: "Hello world note"}).end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('return user lesson information', (done) => {
    chai.request(app).post('/lesson_data').send({username:"12345"}).end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('update lesson status', (done) => {
    chai.request(app).post('/update_lesson_status').send({username:"12345", lessonPath:"forces.friction_drag", status: true}).end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('update notes for a lesson', (done) => {
    chai.request(app).post('/update_notes').send({username: "12345", lessonPath: "forces.friction_drag"}).end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('return most recently accessed lessons', (done) => {
    chai.request(app).post('/recent_lessons').send({username: "12345", lessonPath: "forces.friction_drag"}).end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  it('return the progress of a lesson', (done) => {
    chai.request(app).post('/get_lesson_progress').send({username:"12345", lesson:"kinematics"}).end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });

  afterEach((done) => {
    Account.remove({}, () => {
    });
    Lessons.remove({}, () => {
      done();
    });
   });

});
