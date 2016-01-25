// FLUX CONFIG

require('./flux');

// ROUTE CONFIG

const React = require('react'), // eslint-disable-line no-unused-vars
  reactRouter = require('react-router'),
  Router = reactRouter.Router,
  Route = reactRouter.Route,
  IndexRoute = reactRouter.IndexRoute,
  ReactDom = require('react-dom');

const Layout = require('./components/Layout.jsx'),
  App = require('./components/App.jsx');

const history = require('./history');

ReactDom.render(
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
      <Route path="*" component={App}/>
    </Route>
  </Router>,
  document.getElementById('app'));
