import { RECEIVE_REVIEWS,
         receiveReviews } from '../actions/review_actions';

import merge from 'lodash/merge';

const defaultState = {}

const ReviewsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}

export default ReviewsReducer;
