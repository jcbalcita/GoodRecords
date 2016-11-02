import React from 'react';
import { Link } from 'react-router';
import AuthForm from './auth_form/auth_form';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <nav className="navbar-splash">
      goodrecords
    </nav>
    <div className="splash-image-container">
      <h1 className="splash-greeting">Welcome to GoodRecords</h1>
      <img className="splash-image"
        src="http://res.cloudinary.com/jcbalcita/image/upload/c_scale,q_71,w_900/v1478043095/splash_lm8asd.gif">
      </img>
    </div>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
