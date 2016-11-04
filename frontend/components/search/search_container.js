import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Search from './search';

const mapStateToProps = state => ({
  albums: state.albums
});

export default connect(
  mapStateToProps
)(Search);
