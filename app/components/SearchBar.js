import React, { Component } from 'react'
import Awesomplete from 'awesomplete'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    this.awesome = new Awesomplete(this.refs.input, {
      list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
    })
  }

  componentDidReceiveProps() {
    this.awesome.list = this.props.suggestions
    this.awesome.evaluate()
  }

  onQueryChange(event) {
    console.log(event.target.value)
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className="searchBar">
        <input ref="input" type="text" onChange={this.onQueryChange.bind(this)} value={this.state.query} />
      </div>

    )
  }
}

export default SearchBar
