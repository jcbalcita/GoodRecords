import React from 'react';
import { Link } from 'react-router';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

  componentDidMount() {
    if (!this.props.specificRender) {
      this.props.requestAllAlbums();
    }
  }

  render() {
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

export default AlbumIndex;
