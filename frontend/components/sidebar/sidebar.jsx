import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {


  render() {

    return (
      <div className="sidebar col-1-3">
				<div className="sidebar-box">
					<button className="sidebar-item" onClick={this.props.requestUserAlbums.bind(this, "owned")}>
						My Collection
					</button>
					<br></br>
					<span className="sidebar-item">
						My Wish List
					</span>
				</div>
      </div>
    );
  }
}

export default Sidebar;
