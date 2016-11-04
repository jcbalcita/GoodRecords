import React from 'react';
import { Link, withRouter } from 'react-router';

class AlbumDetail extends React.Component {

  componentDidMount() {
    // debugger
    this.props.requestAlbum(this.props.params.albumId);
  }

  statusButtons() {
    const statuses = ["owned", "wishlist", "want to listen", "remove"];

    statuses.map((type, idx) => (
      <StatusContainer type={type}
              statusExists={Boolean(this.props.status)}
              status={this.props.status ? this.props.status : ""}/>
    ));

  }

  render() {
    const album = this.props.album;
    if (!album) {
      return <div>Loading...</div>;
    }

    return (
      <div className="album-detail-container">
        <p>Hover over the album art to add to your collections!</p>
        <br></br>
        <div className="album-image-container">
          <img src={album.image_url} className="album-show-image"></img>

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
