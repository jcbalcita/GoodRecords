import { connect } from 'react-redux';
import { requestCreateReview,
         requestUpdateReview,
         requestRemoveReview } from '../../actions/review_actions';

import ReviewForm from './review_form';

const mapStateToProps = state => ({
  albumId: state.album.id,
  reviews: state.reviews,
  hasReviews: Boolean(state.reviews.currentAlbumReviews || state.reviews.currentUserReview),
  hasCurrentUserReview: Boolean(state.reviews.currentUserReview)
});

const mapDispatchToProps = (dispatch) => ({
  requestReviews: albumId => dispatch(requestReviews(albumId)),
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Reviews);
