import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review || { album_id: this.props.albumId,
                   body: '',
                   rating: 1
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
        album_id: this.state.album_id,
        image_url: this.state.image_url,
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


  render() {


    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit()}>
          <input type="text"
                 className="review-body-input"
                 placeholder="What did you think of this album?"
                 value={this.state.body}
                 onChange={this.update("body")}></input>
               <br/><br/>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
