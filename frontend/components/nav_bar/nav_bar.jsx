import React from 'react';
import { Link, withRouter } from 'react-router';


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
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    return (
      <nav className="navbar">
        <Link onClick={this.props.requestAllAlbums.bind(this)}>
          <img src="https://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_143/v1478708380/logos/good_records3.png">
          </img>
        </Link>
        {currentUser ? this.navGreeting(currentUser.username, logout) : this.navSlogan()}
      </nav>
    );
   }
 }

export default withRouter(NavBar);
