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

  let agent = chai.request.agent(app)

  it('log into user account', (done) => {
    agent.post('/login').send({ username: '12345', password: 'testy' }).then(function(res){})
    done();
  });

  it('get recent lessons for user', (done) => {
    agent.get('/recent_lessons').then(function(res){})
    done();
  })

  afterEach((done) => {
    Account.remove({}, () => {
    });
    Lessons.remove({}, () => {
      done();
    });
   });

});
