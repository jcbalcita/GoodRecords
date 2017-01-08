import React from 'react';
import { Link, Route, Router } from 'react-router';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

  componentDidMount() {
    if (this.props.specificRender === '' && !this.props.crateRender) {
      this.props.requestAllAlbums();
    }
  }

  componentWillUnmount() {
    this.props.receiveAllAlbums({ albums: this.props.albums, specificRender: false, crateRender: false });
  }

  render() {
    const albums = this.props.albums.map((album, idx) =>
      <AlbumIndexItem key={idx} album={album} />
    );

    const emptyMessage = this.props.specificRender === 'no_results' ? "No albums match your search." : "List empty - browse albums and add to your lists" 

    return (
      <div className="album-index-container">
        {albums.length > 0 ? albums : emptyMessage}
      </div>
    );
  }
}

export default AlbumIndex;
