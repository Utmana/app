'use strict';
var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ChallengesStore = assign({}, EventEmitter.prototype, {
  foo() {
    return 'bar'
  }
});

AppDispatcher.register(function (action) {});

module.exports = {
  foo: 'bar'
}; //ChallengesStore;
