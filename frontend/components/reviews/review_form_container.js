import { connect } from 'react-redux';

import { requestCreateReview,
         requestUpdateReview,
         requestRemoveReview } from '../../actions/review_actions';

import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  albumId: state.album.id,
  review: ownProps.review
});

const mapDispatchToProps = dispatch => ({
  requestCreateReview: review => dispatch(requestCreateReview(review)),
  requestUpdateReview: review => dispatch(requestUpdateReview(review)),
  requestRemoveReview: id => dispatch(requestRemoveReview(id))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(ReviewForm);
