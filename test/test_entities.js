const chai = require('chai');
const expect = require('chai').expect;
const server = require('../bin/www');

chai.use(require('chai-http'));

describe('API endpoint /v1/entities', () => {

  it('should return all entities', () => {
    return chai.request(server)
      .get('/v1/entities')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
  });

});