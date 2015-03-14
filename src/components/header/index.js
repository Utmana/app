'use strict';

var React = require('react');
var {Navbar, Nav} = require('react-bootstrap');
var userStore = require('../../stores/user');
var {Link} = require('react-router');

var Header = React.createClass({
  componentDidMount() {
    userStore.on('change', this.onUserChange);
  },
  componentWillUnmount() {
    userStore.removeListener('change', this.onUserChange);
  },
  render() {
    return (
      <Navbar>
          <Link to="user">{this.state.email}</Link>
          <a href="#/about">About</a>
          <a href="#/login">Login</a>
      </Navbar>
    );
  },
  getInitialState: function () {
    return userStore.getCurrent();
  },
  onUserChange() {
    var user = userStore.getCurrent();
    this.setState({
      email: user && user.email
    });
  }
});

module.exports = Header;
