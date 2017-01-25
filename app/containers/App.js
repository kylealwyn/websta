import React, { PropTypes } from 'react';
import Sidebar from '../components/Sidebar';

const App = ({ children }) => (
  <div className="websta">
    <Sidebar />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
