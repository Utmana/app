var React = require('react');
var UserStore = require('../../stores/user');

var Authentication = {
  statics: {
    willTransitionTo: function (transition) {
      var nextPath = transition.path;
      var user = UserStore.getCurrent();
      if (!user.email) {
        transition.redirect('/login',{},
          { 'nextPath' : nextPath });
      }
    }
  }
};

var User = React.createClass({
  mixins: [Authentication],
  render: function() {
    return (
      <div />
    );
  }

});

module.exports = User;
