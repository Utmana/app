'use strict';

var React = require('react');
var Router = require('react-router');
var Header = require('./components/header');
var About = require('./pages/about');
var Login = require('./pages/login');
var User = require('./pages/user');

var { Route, RouteHandler, DefaultRoute } = Router;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="user" handler={User}/>
    <Route name="login" handler={Login}/>
    <DefaultRoute handler={About}/>
  </Route>
  );

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
