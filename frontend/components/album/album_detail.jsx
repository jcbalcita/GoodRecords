import React from 'react';
import { Link, withRouter, Route, Router } from 'react-router';
import StatusContainer from '../status/status_container';
import ReviewsContainer from '../reviews/reviews_container';

class AlbumDetail extends React.Component {

  componentDidMount() {
    // debugger
    this.props.requestAlbum(this.props.params.albumId);
  }

  render() {
    const album = this.props.album;
    if (!album.title) {
      return <div className="album-detail-container"><div className="loader">Loading...</div></div>;
    } else if (this.props.album.id.toString() !== this.props.router.params.albumId) {
      return <div className="album-detail-container"><div className="loader">Loading...</div></div>;
    } else {
      let statuses = ["owned", "wishlist", "want to listen", "remove"]
      let statusButtons = statuses.map((status, id) => (
        <StatusContainer key={id} type={status} status={this.props.album.status} />
      ));

      return (
        <div className="album-detail-container">
          <p>Hover over the album art to add to your collections!</p>
          <br></br>

          <div className="album-image-container">
            <img src={album.image_url} className="album-show-image"></img>
            <div className="status-button-container">
              {this.props.album ? statusButtons : ''}
            </div>
          </div>

          <h3>{album.title}</h3>
          <h4>{album.artist}</h4>

          <div className="album-description-container">
            <p>{album.description}</p>
          </div>
          <br></br>
          <ReviewsContainer />
        </div>
      );
    }
  }

 }

export default AlbumDetail;
