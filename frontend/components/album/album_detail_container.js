import { connect } from 'react-redux';
import AlbumDetail from './album_detail';
import { requestAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    album: state.album
  };
};

const mapDispatchToProps = dispatch => ({
  requestAlbum: id => dispatch(requestAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
