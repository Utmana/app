'use strict';

var request = require('browser-request');

function makeRequest(options) {
  return new Promise(function executor(resolve, reject) {
    request(options, function (error, response, body) {
      if (error) {
        return reject(error);
      }
      return resolve(body);
    });
  });
}

module.exports = {
  get(url) {
    return makeRequest({
      url: url,
      method: 'GET',
      json: true
    });
  },
  post(url, data) {
    return makeRequest({
      url: url,
      method: 'POST',
      body: data,
      json: true
    });

  },
  put(url, data) {
    return makeRequest({
      url: url,
      method: 'PUT',
      body: data,
      json: true
    });

  },
  del(url, data) {
    return makeRequest({
      url: url,
      method: 'DELETE',
      body: data,
      json: true
    });
  }
};
