import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import AlbumIndex from './album_index';

const mapStateToProps = state => ({
  albums: state.albums
});


export default connect(
  mapStateToProps
)(AlbumIndex);
