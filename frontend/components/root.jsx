import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './home/home_container';



const Root = ({store}) => {

  const _redirect = (nextState, replace) => {
      const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace('/home');
      }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={GreetingContainer}
                 onEnter={_redirect} />
          <Route path="/login" component={AuthFormContainer}
                 onEnter={_redirect} />
          <Route path="/signup" component={AuthFormContainer}
                 onEnter={_redirect} />
          <Route path="/home" component={HomeContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
