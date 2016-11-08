import React from 'react';

const ReviewItem = ( {review} ) => (
  <div className="review-item-box">
    <div className="review-index-item">
      <p className="review-item-header">
        <b>Username</b> rates this album {review.rating} out of 5.
      </p>
        <p className="review-body">{review.body}</p>
    </div>
  </div>
);

export default ReviewItem;
