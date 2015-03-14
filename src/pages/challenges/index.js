'use strict';
var React = require('react');
var {
  Link
} = require('react-router');
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
        <li key={item._id}>
          <Link to="challenge" params={{id: item._id}}>{item.summary}</Link>
        </li>
      );
    }
    return (
      <ul>{this.state.challenges.map(renderItem)}</ul>
    );
  }
});

module.exports = Challenges;
