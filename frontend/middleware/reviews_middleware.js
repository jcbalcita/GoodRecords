import { REQUEST_REVIEWS,
         requestReviews,
         REQUEST_CREATE_REVIEW,
         requestCreateReview,
         REQUEST_UPDATE_REVIEW,
         requestUpdateReview,
         REQUEST_REMOVE_REVIEW,
         requestRemoveReview,
         RECEIVE_REVIEWS,
         receiveReviews,
         RECEIVE_REVIEW,
         receiveReview,
         PROCESS_DELETE_REVIEW,
         processDeleteReview } from '../actions/review_actions.js';

import { fetchReviews,
         createReview,
         updateReview,
         removeReview } from '../util/review_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const reviewsSuccess = reviews => dispatch(receiveReviews(reviews))
  const reviewSuccess = review => dispatch(receiveReview(review))
  const deleteSuccess = () => dispatch(processDeleteReview())

  switch (action.type) {
    case REQUEST_REVIEWS:
      return fetchReviews(action.albumId, reviewsSuccess);
    case REQUEST_CREATE_REVIEW:
      return createReview(action.review, reviewSuccess);
    case REQUEST_UPDATE_REVIEW:
      return updateReview(action.review, reviewSuccess);
    case REQUEST_REMOVE_REVIEW:
      return removeReview(action.id, deleteSuccess);
    default:
      return next(action)
  }
};
