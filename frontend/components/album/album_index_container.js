import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import AlbumIndex from './album_index';

const mapStateToProps = state => ({
  albums: Object.keys(state.albums).map(idx => state.albums[idx])
});

export default connect(
  mapStateToProps
)(AlbumIndex);
