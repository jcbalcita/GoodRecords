import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  const guestUser = {user: {username: 'Guest', password: 'password'}};

  return {
    guestLogin: () => dispatch(login(guestUser)),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
