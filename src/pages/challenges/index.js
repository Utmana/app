'use strict';
var React = require('react');
var challengesStore = require('../../stores/challenges');

var Challenges = React.createClass({
  componentDidMount() {
    challengesStore
      .getList()
      .then(function (results) {
        this.setState({
          challenges: results
        });
      })
      .catch(function (error) {

      });
  },
  render() {
    return (
      <div>

      </div>
    );
  }
});

module.exports = Challenges;
