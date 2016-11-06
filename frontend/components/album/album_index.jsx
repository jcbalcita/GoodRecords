import React from 'react';
import Infinite from 'react-infinite';
import { Link } from 'react-router';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

  render() {
		let albums = this.props.albums.map((album, idx) =>
			<AlbumIndexItem key={idx} album={album} />
		);

    return (
      <Infinite containerHeight={600} elementHeight={230}>
        <div className="album-index-container">
          {albums}
        </div>
      </Infinite>
    );
  }
}

export default AlbumIndex;
