import React from 'react';
import ContentEditable from 'react-contenteditable'
import styles from './Treeview.global.scss';

const Treeview = ({
  name,
  collapsed = true,
  children,
  onClick = () => {}
}) => (
  <ul className="treeview">
    <li>
      <input type="checkbox" id={`${name}_trigger`} defaultChecked={!collapsed} />
      <label className={collapsed ? 'treeview-active' : ''} htmlFor={`${name}_trigger`} onClick={onClick} onContextMenu={onClick}>
        {name}
      </label>
      
      <div className="treeview_container">
        {children}
      </div>
    </li>
  </ul>
);

export default Treeview;
