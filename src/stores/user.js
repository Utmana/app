'use strict';
var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var user = {
  email: '',
  password: ''
};

var UserStore = assign({}, EventEmitter.prototype, {
  login(credentials) {
    user.email = credentials.email;
    user.password = credentials.password;
    this.emit('change');
  },
  logout() {},
  getCurrent() {
    return user;
  }
});



AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'login':
      UserStore.login(action.credentials);
      break;
    case 'logout':
      UserStore.logout();
      break;
  }

  return true;
});

module.exports = UserStore;
