'use strict';
var React = require('react');
var challengesStore = require('../../stores/challenges');

var Challenges = React.createClass({
  getInitialState() {
    var _this = this;
    challengesStore
      .getList()
      .then(function (results) {
        _this.setState({
          challenges: results
        });
      })
      .catch(function (error) {
        alert(error);
      });
    return {
      challenges: []
    };
  },
  render() {
    function renderItem(item) {
      return (
        <li>{item}</li>
      );
    }
    return (
      <ul>{this.state.challenges.map(renderItem)}</ul>
    );
  }
});

module.exports = Challenges;
