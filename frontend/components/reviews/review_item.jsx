import React from 'react';
import { Link, Route, Router, withRouter } from 'react-router';

const ReviewItem = ( {review, type} ) => {
  const editBar =
    <div className="review-edit-bar">
      <Link to={`/home/`}>Edit your review</Link>
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
  )
};

export default ReviewItem;
