export const REQUEST_REVIEWS = "REQUEST_REVIEWS";
export const REQUEST_CREATE_REVIEW = "REQUEST_NEW_REVIEW";
export const REQUEST_UPDATE_REVIEW = "REQUEST_UPDATE_REVIEW";
export const REQUEST_REMOVE_REVIEW = "REQUEST_REMOVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REQUEST_REVIEW = "REQUEST_REVIEW";

export const requestReviews = albumId => ({
  type: REQUEST_REVIEWS,
  albumId
});

export const requestReview = id => ({
  type: REQUEST_REVIEW,
  id: id
});

export const requestCreateReview = review => ({
  type: REQUEST_CREATE_REVIEW,
  review
});

export const requestUpdateReview = review => ({
  type: REQUEST_UPDATE_REVIEW,
  review
});

export const requestRemoveReview = id => ({
  type: REQUEST_REMOVE_REVIEW,
  id
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});
