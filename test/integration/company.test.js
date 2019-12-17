const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const models = require('../../src/models');
const { expect } = chai;

chai.use(chaiHttp);

const createPayload = {
  name: 'Company Test',
  legal_name: 'Programming Software',
  email: 'RichardStallman@softwarelibre.com',
  phone: '12345432',
  address: 'CABA',
};

describe('CompanyAPITest', () => {
  before(() => models.sequelize.sync());

  it('Create Company Success', (done) => {
    chai
      .request(app)
      .post('/company')
      .set('Content-Type', 'application/json')
      .send(createPayload)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.name).to.equals(createPayload.name);

        done();
      });
  });
});
