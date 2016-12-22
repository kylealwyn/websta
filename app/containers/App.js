import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div className="websta">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
