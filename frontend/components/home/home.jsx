import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import AlbumIndexContainer from '../album/album_index_container';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="home">
				<SidebarContainer />
				{this.props.children}
      </div>
    );
  }
}

export default Home;
