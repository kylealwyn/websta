import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.global.scss';
import Treeview from '../TreeView/Treeview';

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
        <Treeview name="views">
          <Treeview name="partials">
            <Treeview name="components">
              <span>index.html</span>
              <span>about.html</span>
              <Treeview name="nest">
                <span>index.html</span>
                <span>about.html</span>
              </Treeview>
            </Treeview>
          </Treeview>
        </Treeview>
      </div>
    );
  }
}

export default Sidebar;
