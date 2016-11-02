import React from 'react';
import { Link } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="home">
				This is my home.
				<SidebarContainer />
				{this.props.children}
      </div>
    );
  }
}

export default Home;
