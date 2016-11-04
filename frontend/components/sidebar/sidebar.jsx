import React from 'react';
import { Link, withRouter, Route, Router } from 'react-router';



class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleBrowseClick = this.handleBrowseClick.bind(this);
    this.handleCollectionClick = this.handleCollectionClick.bind(this);
  }

  handleBrowseClick(e) {
    e.preventDefault();
    this.props.router.push("/home");
    this.props.requestAllAlbums();
  }

  handleCollectionClick(status, e) {
    // debugger
    e.preventDefault();
    this.props.router.push("/home");
    this.props.requestUserAlbums(status);
  }

  render() {
    return (
      <div className="sidebar col-1-3">
				<div className="sidebar-box">
					<button className="sidebar-item"
                  onClick={this.handleBrowseClick}>
						Browse All Albums
					</button>
					<button className="sidebar-item"
                  onClick={this.handleCollectionClick.bind(this, "owned")}>
						My Collection
					</button>
					<button className="sidebar-item"
                  onClick={this.handleCollectionClick.bind(this, "wishlist")}>
						My Wish List
					</button>
					<button className="sidebar-item"
                  onClick={this.handleCollectionClick.bind(this, "want to listen")}>
						Want to Listen
					</button>
				</div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
