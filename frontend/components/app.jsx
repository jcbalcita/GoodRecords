import React from 'react';
import { Link } from 'react-router';
import AuthForm from './auth_form/auth_form';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <nav className="navbar">
      goodrecords
    </nav>
      {children}
  </div>
);

export default App;
