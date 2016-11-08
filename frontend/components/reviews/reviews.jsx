import React from 'react';
import { Link, Route, Router, withRouter } from 'react-router';
import ReviewItem from './review_item';

class Reviews extends React.Component {

  render() {
    let reviewArray = Object.keys(this.props.reviews.currentAlbumReviews).map(idx => this.props.reviews.currentAlbumReviews[idx]);
    let reviewItems = reviewArray.map((review, idx) => <ReviewItem review={review} key={idx} />);

    return (
      <main className="reviews-container">Reviews go here.
        {reviewItems}
      </main>
    );
  }

}

export default withRouter(Reviews);
