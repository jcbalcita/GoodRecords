import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review || { album_id: this.props.albumId,
                   body: '',
                   rating: 0,
                   modalIsOpen: false
                 };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();

      if (!this.state.body || !this.state.rating) {
        alert("A review needs both a body and a rating.")
        return null;
      }

      let review = {
        id: this.state.id,
        album_id: this.state.album_id,
        body: this.state.body,
        rating: this.state.rating
      };
      if (this.props.type === "new" ) {
        this.props.requestCreateReview(review);
      } else {
        this.props.requestUpdateReview(review);
      }
    };
  }

  onStarClick(nextValue) {
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit()}>
          <span className="rate-this-album">Rate this album:</span> <StarRatingComponent
            name="rating"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick.bind(this)}
            />
          <br/>
          <textarea className="review-body-input"
                    rows="5"
                    placeholder="What do you think of this album?"
                    value={this.state.body}
                    onChange={this.update("body")}>
          </textarea>
          <div>
          </div>
          <input className="review-submit" type="submit" value="Submit Your Review"></input>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
