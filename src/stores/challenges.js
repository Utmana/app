'use strict';

var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('superagent');
var challengesMock = require('../mocks/challenges').challenges;
var {
  BASE_URL
} = require('../constants/config');

var ChallengesStore = assign({}, EventEmitter.prototype, {
  get(id) {
    return new Promise(function executor(resolve, reject) {
      request
        .get(`${BASE_URL}/challenges${id}`)
        .set('Accept', 'application/json')
        .end(function (err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
    });
  },
  /**
   * Get the list of challenges
   * @return {Object} [description]
   */
  getList() {
    return new Promise(function executor(resolve, reject) {
      request
        .get(`${BASE_URL}/challenges`)
        .set('Accept', 'application/json')
        .end(function (err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
    });
  }
});

module.exports = ChallengesStore;
