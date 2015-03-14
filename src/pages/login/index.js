var React = require('react');
var {Modal, Button} = require('react-bootstrap');
var Router = require('react-router');
require('react/addons');
var AppDispatcher = require('../../dispatcher');
var userStore = require('../../stores/user');

var Login = React.createClass({
  mixins: [React.addons.LinkedStateMixin, Router.Navigation, Router.State],
  close() {
    this.transitionTo('about');
  },
  login() {
    var nextPath = this.getQuery().nextPath;
    AppDispatcher.dispatch({
      actionType: 'login',
      credentials: this.state
    });
    if (nextPath) {
      this.transitionTo(nextPath);
    } else {
      this.close();
    }
  },
  getInitialState() {
    var user = userStore.getCurrent();
    return {
      email: user && user.email
    };
  },
  render() {
    return (
      <Modal title="Login"
        animation={true}
        onRequestHide={this.close}>
        <div className="modal-body">
          <input type="text" placeholder="email" valueLink={this.linkState('email')}/>
          <input type="password" placeholder="password" valueLink={this.linkState('password')}/>
        </div>
        <div className="modal-footer">
          <Button onClick={this.close}>Close</Button>
          <Button onClick={this.login}>Login</Button>
        </div>
      </Modal>
    );
  }

});

module.exports = Login;
