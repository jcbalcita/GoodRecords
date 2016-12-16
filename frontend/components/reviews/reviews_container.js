import { connect } from 'react-redux';

import { requestReviews,
         requestRemoveReview } from '../../actions/review_actions';

import Reviews from './reviews';

const mapStateToProps = state => ({
  albumId: state.album.id,
  reviews: state.reviews,
  hasReviews: Boolean(state.reviews.currentAlbumReviews || state.reviews.currentUserReview),
  hasCurrentUserReview: Boolean(state.reviews.currentUserReview),
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  requestReviews: albumId => dispatch(requestReviews(albumId)),
  requestRemoveReview: id => dispatch(requestRemoveReview(id))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Reviews);
