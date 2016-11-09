import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review || { album_id: this.props.albumId,
                   body: '',
                   rating: 0
                 };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => {
      console.log(e.target.value);
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
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
          <br/>
          <textarea className="review-body-input"
                    rows="5"
                    placeholder="What do you think of this album?"
                    value={this.state.body}
                    onChange={this.update("body")}>
          </textarea>
          <div>
            <h2>Rate this album</h2>
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
              />
          </div>
          <input className="review-submit" type="submit" value="Submit Your Review"></input>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
