import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="sidebar col-1-3">
				This is my sidebar.
      </div>
    );
  }
}

export default Sidebar;
