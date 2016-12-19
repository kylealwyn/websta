import React, { Component } from 'react';
import Awesomplete from 'awesomplete';
import styles from './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  componentDidMount() {
    console.log(this);
    this.awesome = new Awesomplete(this.searchInput, {
      list: ['Ada', 'Java', 'JavaScript', 'Brainfuck', 'LOLCODE', 'Node.js', 'Ruby on Rails']
    });
  }

  // TODO
  componentDidReceiveProps() {
    // this.awesome.list = this.props.suggestions;
    // this.awesome.evaluate();
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div className="searchBar">
        <form>
          <input
            type="text"
            className={styles.searchInput}
            ref={(input) => { this.searchInput = input; }}
            onChange={this.handleQueryChange.bind(this)}
            value={this.state.query}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;