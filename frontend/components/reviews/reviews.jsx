import React from 'react';
import { Link, Route, Router, withRouter } from 'react-router';
import ReviewItem from './review_item';
import ReviewFormContainer from './review_form_container';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edit: false }
  }

  toggleEditToTrue() {
    this.setState({ [edit]: true })
  }

  toggleEditToFalse() {
    this.setState({ [edit]: false })
  }

  userReviewOrForm() {
    if (this.props.hasCurrentUserReview) {
      return <ReviewItem review={this.props.reviews.currentUserReview} type={'currentUser'} />;
    } else {
      return <ReviewFormContainer type={'new'} />;
    }
  }

  render() {

    if (this.props.reviews.currentAlbumReviews) {
      let reviewArray = Object.keys(this.props.reviews.currentAlbumReviews).map(idx => this.props.reviews.currentAlbumReviews[idx]);
      const reviewItems = reviewArray.map((review, idx) => <ReviewItem review={review} key={idx} type={'otherUser'}/>);
      const editForm = <ReviewFormContainer type={'edit'} review={this.props.currentUserReview} toggleEditToFalse={this.toggleEditToTrue.bind(this)}/>

      return (
        <main className="reviews-container">
          { this.state.edit ? <ReviewFormContainer type={'edit'} review={this.props.currentUserReview} /> : this.userReviewOrForm() }
          <h3 className="reviews-header">Community Reviews</h3>
          {reviewItems}
        </main>
      );

    } else {
      return (
        <main className="reviews-container">
          { this.userReviewOrForm() }
          <h3 className="reviews-header">Community Reviews</h3>
          This album has not yet been reviewed.
        </main>
      );
    }

  }

}

export default withRouter(Reviews);
