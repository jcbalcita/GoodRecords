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
    this.props.requestAllAlbums();
  }

  handleCollectionClick(status, e) {
    e.preventDefault();
    this.props.requestUserAlbums(status);
  }

  render() {

    return (
      <div className="sidebar col-1-3">
				<div className="sidebar-box">
					<button className="sidebar-item"
                  onClick={this.handleBrowseClick}>
						Browse Albums
					</button>
					<button className={this.props.section === "owned" ? "sidebar-item-highlighted" : "side-bar-item"}
                  onClick={this.handleCollectionClick.bind(this, "owned")}>
						My Collection
					</button>
					<button className={this.props.section === "wishlist" ? "sidebar-item-highlighted" : "side-bar-item"}
                  onClick={this.handleCollectionClick.bind(this, "wishlist")}>
						My Wish List
					</button>
					<button className={this.props.section === "want to listen" ? "sidebar-item-highlighted" : "side-bar-item"}
                  onClick={this.handleCollectionClick.bind(this, "want to listen")}>
						Want to Listen
					</button>
				</div>

        <div className="sidebar-message">
          <img className="sidebar-logo"
               src="http://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_234/v1478708380/logos/good_records2.png">
          </img>
          <p className="sidebar-message-text">
            <p className="sidebar-title">Welcome to Goodrecords!</p>
            <br/>
            Having trouble remembering all the records you own? Keep track of them here by adding them to your <b>My Collection</b> list.
            <br/><br/><br/>
            Always draw a blank when shopping at the record store, putting together a playlist, or giving new music recommendations to friends?
            <br/><br/>Never again! Keep track of your <b>wish list</b> and albums you <b>want to listen</b> to with the simple click of a button.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
