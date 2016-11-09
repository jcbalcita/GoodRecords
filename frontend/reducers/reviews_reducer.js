import { RECEIVE_REVIEWS,
         receiveReviews,
         receiveReview,
         RECEIVE_REVIEW,
         PROCESS_DELETE_REVIEW } from '../actions/review_actions';

import merge from 'lodash/merge';

const defaultState = { reviews: { currentAlbumReviews: {}, currentUserReview: {} }}

const ReviewsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, { currentUserReview: action.review })
    case PROCESS_DELETE_REVIEW:
      let newState = merge({}, state);
      newState.currentUserReview = null;
      return newState;
    default:
      return state;
  }
}

export default ReviewsReducer;
