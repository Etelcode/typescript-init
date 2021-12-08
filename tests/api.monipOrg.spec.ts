import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

describe('Hello World HTTP test', () => {
  it('should return 2** HTTP code', () => {
    return chai.request("http://monip.org").get('/')
      .then(res => {
        chai.expect(res.status).to.eql(200);
      })
  })
})
