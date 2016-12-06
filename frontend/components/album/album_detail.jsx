import React from 'react';
import { Link, withRouter, Route, Router } from 'react-router';
import StatusContainer from '../status/status_container';
import ReviewsContainer from '../reviews/reviews_container';
import CratingsContainer from '../cratings/cratings_container';

class AlbumDetail extends React.Component {

  render() {
    const album = this.props.album;
    if (!album.title) {
      return <div className="album-detail-container"><div className="loader">Loading...</div></div>;
    } else if (this.props.album.id.toString() !== this.props.router.params.albumId) {
      return <div className="album-detail-container"><div className="loader">Loading...</div></div>;
    } else {
      const types = ["owned", "wishlist", "want to listen", "remove"]
      let statusButtons = types.map((type, id) => (
        <StatusContainer key={id} type={type} status={this.props.album.status} />
      ));

      const texts = {
        "": "This album is not currently on any of your shelves.",
        "owned": "Shelved under: My Collection.",
        "wishlist": "Shelved under: My Wish List.",
        "want to listen": "Shelved under: Want to Listen."
      }

      return (
        <div className="album-detail-container">
          <p>Hover over the album art to add to your shelves!</p>
          <br></br>

          <div className="album-art-and-info">
            <div className="album-image-container">
              <img src={album.image_url} className="album-show-image"></img>
              <div className="status-button-container">
                {this.props.album ? statusButtons : ''}
              </div>
            </div>
            <div className="album-info">
              <div className="album-title">{album.title}</div>
              <div className="album-artist">{album.artist}</div>
              <div className="album-year">{album.year}</div>
              <CratingsContainer />
            </div>
          </div>
          <div className="album-status">{texts[album.status]}</div>
          <div className="album-description-container">
            <p>{album.description}</p>
          </div>

          <br></br>
          <ReviewsContainer albumId={this.props.albumId}/>
        </div>
      );
    }
  }

 }

export default AlbumDetail;
