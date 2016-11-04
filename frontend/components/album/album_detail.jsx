import React from 'react';
import { Link, withRouter } from 'react-router';

class AlbumDetail extends React.Component {

  componentDidMount() {
    // debugger
    this.props.requestAlbum(this.props.params.albumId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.requestAlbum(nextProps.params.albumId);
  // }

  render() {
    const album = this.props.album;
    if (!album) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{album.title}</h3>
        <p>{album.artist}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }

 }

export default AlbumDetail;
