import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const Favorites = ({ router }) => (
  <div className="page home">
    <h1>aaa</h1>
    <button onClick={router.goBack}>Back</button>
  </div>
);

Favorites.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Favorites);
