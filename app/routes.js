import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Favorites from './containers/Favorites';

export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={Home} /> */}
    <Route path="/:category" component={Home} />
  </Route>
);
