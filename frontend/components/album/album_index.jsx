import React from 'react';
import { Link, Route, Router } from 'react-router';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

  componentDidMount() {
    if (!this.props.specificRender) {
      this.props.requestAllAlbums();
    }
  }

  render() {
    if (!this.props.specificRender) {
      return <div className="album-index-container"><div className="loader">Loading...</div></div>;
    } else {
      let albums = this.props.albums.map((album, idx) =>
        <AlbumIndexItem key={idx} album={album} />
      );

      return (
        <div className="album-index-container">
          {albums}
        </div>
      );
    }

  }
}

export default AlbumIndex;
