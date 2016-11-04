import React from 'react';
import { Link, withRouter, Route, Router } from 'react-router';

class Sidebar extends React.Component {




  render() {
    return (
      <div className="sidebar col-1-3">
				<div className="sidebar-box">
					<button className="sidebar-item"
                  onClick={this.props.requestAllAlbums.bind(this)}>
						Browse All Albums
					</button>
					<button className="sidebar-item"
                  onClick={this.props.requestUserAlbums.bind(this, "owned")}>
						My Collection
					</button>
					<button className="sidebar-item"
                  onClick={this.props.requestUserAlbums.bind(this, "wishlist")}>
						My Wish List
					</button>
					<button className="sidebar-item"
                  onClick={this.props.requestUserAlbums.bind(this, "want to listen")}>
						Want to Listen
					</button>
				</div>
      </div>
    );
  }
}

export default Sidebar;
