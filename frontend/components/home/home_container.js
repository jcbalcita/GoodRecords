import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({ albums, session, children }) => ({
  albums,
  session,
  children
});

export default connect(
  mapStateToProps
)(Home);
