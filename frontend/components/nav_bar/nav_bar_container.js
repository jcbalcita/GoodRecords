import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestAllAlbums } from '../../actions/album_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestAllAlbums: () => dispatch(requestAllAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
