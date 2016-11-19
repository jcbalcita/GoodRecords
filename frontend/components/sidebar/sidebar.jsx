import React from 'react';
import { Link, withRouter, Route, Router } from 'react-router';
import SidebarMessage from './sidebar_message';
import SidebarBox from './sidebar_box';
import SidebarCratesContainer from './sidebar_crates_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleBrowseClick = this.handleBrowseClick.bind(this);
    this.handleCollectionClick = this.handleCollectionClick.bind(this);
  }

  // componentWillUnmount() {
  //     this.props.receiveCrates({ albumCratings: {}, userCrates: {} });
  // }

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
        <SidebarBox section={this.props.section} handleCollectionClick={this.handleCollectionClick} handleBrowseClick={this.handleBrowseClick} />
        <SidebarCratesContainer />
        <SidebarMessage />
      </div>
    );
  }
}

export default withRouter(Sidebar);
