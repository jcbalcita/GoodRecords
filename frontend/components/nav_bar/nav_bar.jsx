import React from 'react';
import { Link, withRouter } from 'react-router';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
		this.redirectIfLoggedOut();
	}

	redirectIfLoggedOut() {
		if (!this.props.loggedIn) {
			this.props.router.replace("/login");
		}
	}

  navGreeting(username, logout) {
    return (
      <hgroup className="nav-right">
        <h2 className="header-name">Hello, {username}</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
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
        goodrecords
        <p>search bar goes here</p>
        {currentUser ? this.navGreeting(currentUser.username, logout) : this.navSlogan()}
      </nav>
    );
   }
 }

export default withRouter(NavBar);
