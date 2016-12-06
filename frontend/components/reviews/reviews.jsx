import React from 'react';
import { Link, Route, Router, withRouter } from 'react-router';
import ReviewItem from './review_item';
import ReviewFormContainer from './review_form_container';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'edit': false }

    this.toggleEditToTrue = this.toggleEditToTrue.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.edit) {
      this.setState({ edit: false })
    }
  }

  toggleEditToTrue(e) {
    e.preventDefault();
    this.setState({ edit: true })
  }

  userReviewOrForm() {
    if (this.props.hasCurrentUserReview) {
      return <ReviewItem review={this.props.reviews.currentUserReview}
                         type={'currentUser'}
                         requestRemoveReview={this.props.requestRemoveReview}
                         toggleEditToTrue={this.toggleEditToTrue}/>;
    } else {
      return <ReviewFormContainer type={'new'} />;
    }
  }

  render() {

    if (this.props.reviews.currentAlbumReviews) {
      let reviewArray = Object.keys(this.props.reviews.currentAlbumReviews).map(idx => this.props.reviews.currentAlbumReviews[idx]);
      const reviewItems = reviewArray.map((review, idx) => <ReviewItem review={review} key={idx} type={'otherUser'}/>);
      const editForm = <ReviewFormContainer type={'edit'} review={this.props.reviews.currentUserReview} />

      return (
        <main className="reviews-container">
          { this.state.edit ? editForm : this.userReviewOrForm() }
          <h3 className="reviews-header">Community Reviews</h3>
          {reviewItems}
        </main>
      );
    } else {
      const editForm = <ReviewFormContainer type={'edit'} review={this.props.reviews.currentUserReview} />
      return (
        <main className="reviews-container">
          { this.state.edit ? editForm : this.userReviewOrForm() }
          <h3 className="reviews-header">Community Reviews</h3>
          This album has not yet been reviewed by other users.
        </main>
      );
    }
  }

}

export default withRouter(Reviews);
