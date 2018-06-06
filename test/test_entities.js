const chai = require('chai');
const expect = require('chai').expect;
const server = require('../bin/www');

const testId = 'depositpoint:02210001-0000';

chai.use(require('chai-http'));

describe('API endpoint /v1/entities', function () {

  it('should return all entities',function () {
    return chai.request(server)
      .get('/v1/entities')
      .set('Fiware-Service', 'waste4think')
      .set('Fiware-ServicePath', '/deusto/w4t/zamudio/test')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
  });

  it('should return 428 response code when no Service header',function () {
    return chai.request(server)
      .get('/v1/entities')
      .set('Fiware-ServicePath', '/deusto/w4t/zamudio/test')
      .then((res) => {
        expect(res).to.have.status(428);
      });
  });

  it('should return 428 response code when no ServicePath header',function () {
    return chai.request(server)
      .get('/v1/entities')
      .set('Fiware-Service', 'waste4think')
      .then((res) => {
        expect(res).to.have.status(428);
      });
  });

});

describe('API endpoint /v1/entities/:entityId', function () {

  it('should return single entitiy',function () {
    return chai.request(server)
      .get(`/v1/entities/${testId}`)
      .set('Fiware-Service', 'waste4think')
      .set('Fiware-ServicePath', '/deusto/w4t/zamudio/test')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  it('should return 428 response code when no Service header',function () {
    return chai.request(server)
      .get(`/v1/entities/${testId}`)
      .set('Fiware-ServicePath', '/deusto/w4t/zamudio/test')
      .then((res) => {
        expect(res).to.have.status(428);
      });
  });

  it('should return 428 response code when no ServicePath header',function () {
    return chai.request(server)
      .get(`/v1/entities/${testId}`)
      .set('Fiware-Service', 'waste4think')
      .then((res) => {
        expect(res).to.have.status(428);
      });
  });

});