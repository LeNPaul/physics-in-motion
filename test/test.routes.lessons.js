var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
const mongoose = require('mongoose');
let app = require('../app.js');
const Account = require("../models/account.js");
const Lessons = require("../models/lessons.js");

describe('Lessons API', () => {

  before((done) => {
    done();
  });

  after((done) => {
    done();
  });

  beforeEach( (done) => {
    done();
  });

  // Test workflow:
  //    1. Create a new Account
  //    2. Get /lesson_data
  //    3. Get /recent_lessons
  //    4. Get /lesson_progress/:lesson for all lessons
  //    5. Get /notes/:lesson/data for all lessons
  //    6. Post /update_lesson_time for all lessons
  //    7 Post /update_lesson_status for all lessons
  //    8. Post /update_lesson_notes for all lessons
  //        a. Send a wide range of characters

  it('', (done) => {
    done();
  });

  afterEach((done) => {
    done();
  });

});
