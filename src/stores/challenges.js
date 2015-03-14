'use strict';

var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
require('core-js');

var challenges = [{
  id: 1,
  name: 'test'
}, {
  id: 1337,
  foo: 'bar'
}];

var ChallengesStore = assign({}, EventEmitter.prototype, {
  get(id) {
    return challenges.find(element => element.id === id);
  },
  getList() {},
  create() {}
});

AppDispatcher.register(function (action) {});

module.exports = ChallengesStore;
