import React from 'react';
import { Link, Route, Router } from 'react-router';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

  componentDidMount() {
    if (this.props.specificRender === 'all' && !this.props.crateRender) {
      this.props.requestAllAlbums();
    }
  }

  render() {
    let albums = this.props.albums.map((album, idx) =>
      <AlbumIndexItem key={idx} album={album} />
    );

    return (
      <div className="album-index-container">
        {albums.length > 0 ? albums : `List empty -- browse albums and add to your lists!`}
      </div>
    );
  }
}

export default AlbumIndex;
