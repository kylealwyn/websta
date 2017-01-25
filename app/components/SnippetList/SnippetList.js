import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './SnippetList.scss';

class SnippetList extends Component {
  state = {}

  componentDidMount() {}

  render() {
    return (
      <div className={styles.snippetList}>
        <pre>
          <code>
            {JSON.stringify(this.props, null, 2)}
          </code>
        </pre>

      </div>
    );
  }
}

export default withRouter(SnippetList);
