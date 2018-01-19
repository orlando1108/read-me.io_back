const superagent = require('superagent');
const expect = require('chai').expect;
const before  = require('chai').before;
const after  = require('chai').after;
const describe  = require('chai').describe;
const it = require('chai').it;

let host = 'http://localhost:3000';
let urlAPI = '/api/health/';

describe('API health --> /api/health/', function() {

  let app = require('../src/app.js');
  let instance;

  before(function() {
    instance = app.listen(3000);
  });
  after(function() {
    instance.close();
  });

  describe('GET', function() {
    it(`GIVEN ${urlAPI} WHEN send GET request THEN should return 200`, function(done) {
      superagent.get(`${host}${urlAPI}`).end(function(e, res) {
        expect(res.status).to.eql(200);
        done();
      });
    });
  });
});
