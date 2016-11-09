import React from 'react';
import { Link, Route, Router, withRouter } from 'react-router';

const ReviewItem = ( { review, type, requestRemoveReview } ) => {

  const handleDelete = id => e => requestRemoveReview(id)

  const editBar =
    <div className="review-edit-bar">
      <button onClick={handleDelete(review.id)}>Delete Review</button>
    </div>;

  return (
    <div className="review-item-box">
      <div className="review-index-item">

        <p className="review-item-header">
          <span>
            <b>{ type === 'currentUser' ? 'You' : review.author }</b> rated this album {review.rating} out of 5.
          </span>
          <span>
            {type === 'currentUser' ? '' : `${review.createDate} ago`}
          </span>
        </p>

          <p className="review-body">{review.body}</p>

          { type === 'currentUser' ? editBar : ""}
        </div>
      </div>
  );
};

export default ReviewItem;
