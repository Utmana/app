'use strict';
var React = require('react');
var {
  Modal, Button
} = require('react-bootstrap');
var Router = require('react-router');
var challengesStore = require('../../stores/challenges');
var core = require('core-js');

var challenge = React.createClass({
  mixins: [Router.Navigation, Router.State],
  close() {
    this.transitionTo('challenges');
  },
  getInitialState() {
    var params = this.getParams();
    var id = params ? params.id : 0;

    var _this = this;
    challengesStore
      .get(id)
      .then(function (result) {
        _this.setState({
          challenge: result
        });
      })
      .catch(function (error) {
        alert(error);
      });
    return {
      challenge: {}
    };
  },
  accept() {

  },
  next() {},
  render() {
    return (
      <Modal title="Challenge"
        animation={true}
        onRequestHide={this.close}>
        <div className="modal-body">
          <img src={this.state.challenge.img} />
          <span>{this.state.challenge.summary}</span>
          <div>{this.state.challenge.description}</div>
        </div>
        <div className="modal-footer">
          <Button onClick={this.accept}>Accept</Button>
          <Button onClick={this.next}>Next</Button>
        </div>
      </Modal>
    );
  }

});

module.exports = challenge;
