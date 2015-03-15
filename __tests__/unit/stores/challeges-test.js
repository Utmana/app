'use strict';

jest.dontMock('object-assign');
jest.dontMock(`${process.cwd()}/src/stores/challenges`);

describe('/stores/Challenges', function () {
  var Challenges;
  var React;
  var TestUtils;
  var request;
  var config;

  beforeEach(function () {
    config = {
      BASE_URL: 'http://foo.bar'
    };
    Challenges = require(`${process.cwd()}/src/stores/challenges`);
    request = require(`${process.cwd()}/src/services/request`);
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    jest.setMock(`${process.cwd()}/src/constants/config`, config)
  });

  describe('#get', function () {
    it('should be defined and a function', function () {
      expect(Challenges.get).toBeDefined();
      expect(Challenges.get).toEqual(jasmine.any(Function));
    });
    it('makes the correct request', function () {
      var get = request.get.mock;
      Challenges.get(1337);
      expect(get.calls.length).toBe(1);
      expect(get.calls[0][0]).toEqual('http://foo.bar/challenges/1337');
    });
  });

  describe('#getList', function () {
    it('should be defined and a function', function () {
      expect(Challenges.getList).toBeDefined();
      expect(Challenges.getList).toEqual(jasmine.any(Function));
    });
    it('makes the correct request', function () {
      var get = request.get.mock;
      Challenges.getList(1337);
      expect(get.calls.length).toBe(1);
      expect(get.calls[0][0]).toEqual('http://foo.bar/challenges');
    });
  });

  describe('#accept', function () {
    it('should be defined and a function', function () {
      expect(Challenges.accept).toBeDefined();
      expect(Challenges.accept).toEqual(jasmine.any(Function));
    });
    it('makes the correct request', function () {
      var post = request.post.mock;
      Challenges.accept(1337);
      expect(post.calls.length).toBe(1);
      expect(post.calls[0][0]).toEqual('http://foo.bar/challenges/1337/accept');
    });
  });
});
