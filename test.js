const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should()

const utils = require('./index')

describe('array', function () {
  describe('#remove', function () {
    it('should be equal', function () {
      let arr = ['paddy','patrick','somebody']
      expect(utils.array.remove(arr,'somebody')).to.deep.equal(['paddy','patrick'])
    });
  });
});

describe('date', function () {
  describe('#getYear', function () {
    it('should be 2019', function () {
      let date = '2019-1-23'
      let res = utils.date.getYear(date)
      res.should.equal(2019)
    });
  });
});
