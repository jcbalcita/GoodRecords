import { REQUEST_REVIEWS,
         requestReviews,
         REQUEST_CREATE_REVIEW,
         requestCreateReview,
         REQUEST_UPDATE_REVIEW,
         requestUpdateReview,
         REQUEST_REMOVE_REVIEW,
         requestRemoveReview,
         RECEIVE_REVIEWS,
         receiveReviews } from '../actions/review_actions.js';

import { fetchReviews,
         createReview,
         updateReview,
         removeReview } from '../util/review_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const reviewSuccess = reviews => dispatch(receiveReviews(reviews))

  switch (action.type) {
    case REQUEST_REVIEWS:
      return fetchReviews(action.albumId, reviewSuccess);
    case REQUEST_CREATE_REVIEW:
      return createReview(action.review, reviewSuccess);
    case REQUEST_UPDATE_REVIEW:
      return updateReview(action.review, reviewSuccess);
    case REQUEST_REMOVE_REVIEW:
      return removeReview(action.id, reviewSuccess);
    default:
      return next(action)
  }
};
