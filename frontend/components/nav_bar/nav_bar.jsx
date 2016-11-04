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
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;

    return (
      <nav className="navbar">
        <Link to='home'>goodrecords</Link>
        {currentUser ? <SearchContainer /> : <span></span>}
        {currentUser ? this.navGreeting(currentUser.username, logout) : this.navSlogan()}
      </nav>
    );
   }
 }

export default withRouter(NavBar);
