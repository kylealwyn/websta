import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CodeMirror from 'react-codemirror';
import styles from './Snippet.scss';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class Snippet extends Component {
  state = {
    code: 'var x = 5;',
    modes: ['javascript', 'php'],
    options: {
      mode: 'javascript',
      theme: 'cobalt',
      lineNumbers: true,
      viewportMargin: Infinity,
      gutters: ['CodeMirror-linenumbers'],
    },
  }

  updateCode = (code) => {
    this.setState({ code });
  }

  updateMode = (event) => {
    console.log(event.target);
    this.setState({
      options: {
        ...this.state.options,
        mode: event.target.value,
      },
    });
  }

  render() {
    return (
      <div className={styles.snippet}>
        <select name="" id="" onChange={this.updateMode}>
          {this.state.modes.map((m, i) => <option key={i} value={m}>{m}</option>)}
        </select>
        <CodeMirror
          value={this.state.code}
          options={this.state.options}
          onChange={this.updateCode}
        />
      </div>
    );
  }
}

export default withRouter(Snippet);
