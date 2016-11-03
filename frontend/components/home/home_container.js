import { connect } from 'react-redux';
import { requestAllAlbums } from '../../actions/album_actions';
import Home from './home';

const mapStateToProps = state => ({
  albums: Object.keys(state.albums).map(idx => state.albums[idx]),
  session: state.session
});

const mapDispatchToProps = dispatch => ({
   requestAllAlbums: () => dispatch(requestAllAlbums())
});

export default connect(
  mapStateToProps
)(Home);
