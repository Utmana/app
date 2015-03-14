'use strict';
jest.dontMock(process.cwd() + '/src/stores/challenges');

describe('/stores/Challenges', function () {
  var Challenges;

  beforeEach(function () {
    Challenges = require(process.cwd() + '/src/stores/challenges');
  });

  describe('#ctor', function () {
    it('should work', function () {
      var React = require('react/addons');
      var TestUtils = React.addons.TestUtils;
      expect(true).toBe(true);
    });
  });
});
