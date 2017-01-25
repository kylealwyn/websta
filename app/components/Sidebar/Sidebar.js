import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.global.scss';

class Sidebar extends Component {
  state = {}

  componentDidMount() {}

  handleQueryChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/angular">Angular</Link>
          </li>
        </ul>
        <div>

        <ul className="pure-tree main-tree">
          <li>
            <input type="checkbox" id="trigger-views" defaultChecked="checked" />
            <label htmlFor="trigger-views">views</label>
            <ul className="pure-tree">
              <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
              <li>
                <input type="checkbox" id="trigger-layout" />
                <label htmlFor="trigger-layout">layout</label>
                <ul className="pure-tree">
                  <li>
                    <input type="checkbox" id="trigger-base" />
                    <label htmlFor="trigger-base">base</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" id="trigger-footer" />
                    <label htmlFor="trigger-footer">footer</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="trigger-partials" />
                <label htmlFor="trigger-partials">partials</label>
                <ul className="pure-tree">
                  <li>
                    <input type="checkbox" id="trigger-header" />
                    <label htmlFor="trigger-header">header</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" id="trigger-list" />
                    <label htmlFor="trigger-list">list</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" id="trigger-message" />
                    <label htmlFor="trigger-message">message</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" id="trigger-panel" />
                    <label htmlFor="trigger-panel">panel</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" id="trigger-prompt" />
                    <label htmlFor="trigger-prompt">prompt</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox" id="trigger-sub-header" />
                    <label htmlFor="trigger-sub-header">sub-header</label>
                    <ul className="pure-tree">
                      <li className="pure-tree_link"><a href title="index.jade" target="_blank">index.html</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      </div>
    );
  }
}

export default Sidebar;
