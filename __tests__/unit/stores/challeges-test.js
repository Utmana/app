'use strict';

describe('/stores/Challenges', function () {
  var Challenges;
  var React;
  var TestUtils;

  beforeEach(function () {
    jest.autoMockOff();
    Challenges = require(process.cwd() + '/src/stores/challenges');
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
  });

  afterEach(function () {
    jest.autoMockOn();
  });

  describe('#get', function () {
    it('should be defined and a function', function () {
      expect(Challenges.get).toBeDefined();
      expect(Challenges.get).toEqual(jasmine.any(Function));
    });
  });
});
