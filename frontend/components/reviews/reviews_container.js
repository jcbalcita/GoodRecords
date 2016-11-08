import { connect } from 'react-redux';
import { requestReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mapStateToProps = state => ({
  albumId: state.album.id,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  requestReviews: albumId => dispatch(requestReviews(albumId)),
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Reviews);
