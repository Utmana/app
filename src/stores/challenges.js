'use strict';

var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('../services/request');

var {
  BASE_URL
} = require('../constants/config');

var ChallengesStore = assign({}, EventEmitter.prototype, {
  /**
   * Gets a challenge by it's id
   * @param  {String} id - The id of the challenge
   * @return {Object}    - A promise resolved with the challenge
   */
  get(id) {
    return request.get(`${BASE_URL}/challenges/${id}`);
  },
  /**
   * Get the list of challenges
   * @return {Object} - A promise resolved with the list of challenges
   */
  getList() {
    return request.get(`${BASE_URL}/challenges`);
  },
  /**
   * Accepts a challenge
   * @param  {String} id - The id of the challenge
   * @return {Object}    - A promise
   */
  accept(id) {
    return request.post(`${BASE_URL}/challenges/${id}/accept`);
  },
  /**
   * Decline a challenge
   * @param  {String} id - The id of the challenge
   * @return {Object}    - A promise
   */
  decline(id) {

  }
});

module.exports = ChallengesStore;
