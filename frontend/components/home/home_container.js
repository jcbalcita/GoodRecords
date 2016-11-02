import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({ session }) => ({
  session
});

export default connect(
  mapStateToProps
)(Home);
