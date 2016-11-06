import { connect } from 'react-redux';
import { requestAllAlbums } from '../../actions/album_actions';
import Home from './home';

const mapStateToProps = state => {  
  return (
    {
      albums: Object.keys(state.albums.albums).map(idx => state.albums.albums[idx]),
      session: state.session
    }
  )
};

const mapDispatchToProps = dispatch => ({
   requestAllAlbums: () => dispatch(requestAllAlbums())
});

export default connect(
  mapStateToProps
)(Home);
