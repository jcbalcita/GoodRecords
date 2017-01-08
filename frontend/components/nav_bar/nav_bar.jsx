import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

handleLogoutClick() {
  this.props.logout();
  this.props.router.replace('/login');
}

  navGreeting(username, logout) {
    return (
      <hgroup className="nav-right">
        <h2 className="header-name">Hello, {username}</h2>
        <button className="header-button" onClick={this.handleLogoutClick}>Log Out</button>
    	</hgroup>
    );
  }

  navSlogan() {
    return (
      <p>THE site for music lovers.</p>
    );
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    const navLogo = () => (
      <Link onClick={this.props.requestAllAlbums.bind(this)}>
        <img src="https://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_143/v1478708380/logos/good_records3.png">
        </img>
      </Link>
    );

    return (
      <nav className="navbar">
        {currentUser ? <Link onClick={this.props.requestAllAlbums.bind(this)}>
          <img src="https://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_143/v1478708380/logos/good_records3.png">
          </img>
        </Link> : <div></div> }
        {currentUser ? <SearchContainer /> : ""}
        {currentUser ? this.navGreeting(currentUser.username, logout) : this.navSlogan()}
      </nav>
    );
   }
 }

export default withRouter(NavBar);
