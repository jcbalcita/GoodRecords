import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="greeting-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="greeting-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  <div className="splash-image-container">
    <div className="splash-greeting">
      <h1 className="greeting-message">Welcome to GoodRecords</h1>
      <h2 className="greeting-subhead">Keep track of your record collection, and find new music!</h2>
    </div>
    <img className="splash-image"
      src="http://res.cloudinary.com/jcbalcita/image/upload/c_scale,q_71,w_900/v1478043095/splash_lm8asd.gif">
    </img>
    { currentUser ? personalGreeting(currentUser, logout) : sessionLinks() }
  </div>
);

export default Greeting;
