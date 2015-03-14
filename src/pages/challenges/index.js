'use strict';
var React = require('react');
var challengesStore = require('../../stores/challenges');

var Challenges = React.createClass({
  getInitialState() {
    var _this = this;
    return challengesStore
      .getList()
      .then(function (results) {
        _this.setState({
          challenges: results
        });
      })
      .catch(function (error) {
        alert(error);
      });
  },
  render() {
    return (
      <ul>{this.state.challenges}</ul>
    );
  }
});

module.exports = Challenges;
