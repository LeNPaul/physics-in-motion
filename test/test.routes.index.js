const should = require('should');
var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app.js');

describe('Route API', () => {

  it('return the home page', (done) => {
    var test = '12345';
    test.should.eql('12345');
    done();
  });

});
