import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  albums: state.albums
});

export default connect(
  mapStateToProps
)(Sidebar);
