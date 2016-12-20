import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SearchBar from './components/SearchBar';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchBar} />
  </Route>
);
