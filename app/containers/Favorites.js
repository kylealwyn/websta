import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const Favorites = ({ router }) => (
  <div className="page home">
    <h2>aaaa</h2>
    { JSON.stringify(router) }
    {/* if no suggestions, display quote
    if suggestions, display list */}
    {/* <SuggestionList /> */}
  </div>
);

Favorites.propTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(Favorites);
