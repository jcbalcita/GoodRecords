import React from 'react';
import { Link, Route, Router, withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

const ReviewItem = ( { review, type, requestRemoveReview, toggleEditToTrue } ) => {

  const handleDelete = id => e => requestRemoveReview(id)

  const editBar =
    <div className="review-edit-bar">
      <button onClick={toggleEditToTrue}>Edit</button>
      <button onClick={handleDelete(review.id)}>Delete</button>
    </div>;

  return (
    <div className="review-item-box">
      <div className="review-index-item">

        <p className="review-item-header">
          <span>
            <b>{ type === 'currentUser' ? 'You' : review.author }</b> rated this album&nbsp;&nbsp;
              <StarRatingComponent
                name="rating"
                starCount={5}
                editing={false}
                value={review.rating}
                />
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
