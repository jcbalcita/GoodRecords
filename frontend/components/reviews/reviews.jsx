import React from 'react';
import { Link, Route, Router, withRouter } from 'react-router';
import ReviewItem from './review_item';

class Reviews extends React.Component {

  render() {
    if (this.props.reviews.currentAlbumReviews) {
      let reviewArray = Object.keys(this.props.reviews.currentAlbumReviews).map(idx => this.props.reviews.currentAlbumReviews[idx]);
      let reviewItems = reviewArray.map((review, idx) => <ReviewItem review={review} key={idx} type={'otherUser'}/>);
      return (
        <main className="reviews-container">
          { this.props.hasCurrentUserReview ? <ReviewItem review={this.props.reviews.currentUserReview} type={'currentUser'} /> : ""}
          <h3 className="reviews-header">Community Reviews</h3>
          {reviewItems}
        </main>
      );
    } else {
      return (
        <main className="reviews-container">
          <h3 className="reviews-header">Community Reviews</h3>
          This album has not yet been reviewed.
        </main>
      );
    }

  }

}

export default withRouter(Reviews);
