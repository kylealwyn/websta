import React, { Component } from 'react'

import SearchBar from './SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="myDiv">
        <SearchBar />
      </div>
    )
  }
}

export default App
