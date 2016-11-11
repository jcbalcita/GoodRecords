import { connect } from 'react-redux';
import { requestAllAlbums, requestUserAlbums } from '../../actions/album_actions';
import AlbumIndex from './album_index';

const mapStateToProps = (state, { reviews }) => {
  return (
    {
      albums: Object.keys(state.albums.albums).map(idx => state.albums.albums[idx]),
      specificRender: state.albums.specificRender
    }
  );
};

const mapDispatchToProps = dispatch => ({
   requestAllAlbums: () => dispatch(requestAllAlbums()),
   requestUserAlbums: status => dispatch(requestUserAlbums(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
