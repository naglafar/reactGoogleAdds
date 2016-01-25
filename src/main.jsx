// FLUX CONFIG

require('./flux');

// ROUTE CONFIG

const React = require('react'), // eslint-disable-line no-unused-vars
  reactRouter = require('react-router'),
  Router = reactRouter.Router,
  Route = reactRouter.Route,
  // IndexRoute = reactRouter.IndexRoute,
  ReactDom = require('react-dom');

const App = require('./components/Layout.jsx');

const history = require('./history');

ReactDom.render(
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>,
  document.getElementById('app'));
