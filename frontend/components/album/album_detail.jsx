import React from 'react';
import { Link, withRouter } from 'react-router';
import Status from '../status/status';

class AlbumDetail extends React.Component {

  componentDidMount() {
    // debugger
    this.props.requestAlbum(this.props.params.albumId);
  }

  render() {
    const album = this.props.album;
    if (!album) {
      return <div>Loading...</div>;
    }

    let statuses = ["collection", "wishlist", "want to listen", "remove"]
    let statusButtons = statuses.map((status, id) => (
      <Status key={id} type={status} album={this.props.album} />
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

        <span className="album-description-container">
          <p>{album.description}</p>
        </span>

        <br></br>
        <Link to="/home">Back to Index</Link>
      </div>
    );
  }

 }

export default AlbumDetail;
