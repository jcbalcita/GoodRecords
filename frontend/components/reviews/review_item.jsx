import React from 'react';

const ReviewItem = ( {review} ) => (
  <div className="review-index-item">
      <p>{review.body}</p>
      <p>{review.rating}</p>
  </div>
);

export default ReviewItem;
