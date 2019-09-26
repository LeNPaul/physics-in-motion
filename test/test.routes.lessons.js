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

  beforeEach( (done) => {
    done();
  });

  it('log into user account', (done) => {
    done();
  });

  afterEach((done) => {
    done();
  });

  after((done) => {
    Account.remove({}, () => {
    });
    Lessons.remove({}, () => {
    });
    done();
    mongoose.connection.close();
    done();
  });

});
