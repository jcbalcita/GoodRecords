import { connect } from 'react-redux';
import AlbumDetail from './album_detail';
import { requestAlbum } from '../../actions/album_actions';
import { requestReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.album,
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  requestAlbum: id => dispatch(requestAlbum(id)),
  requestReviews: albumId => dispatch(requestReviews(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
