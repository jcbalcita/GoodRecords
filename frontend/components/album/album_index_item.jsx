import React from 'react';
import { Link, withRouter } from 'react-router';

const AlbumIndexItem = ({album}) => (
  <div className="album-index-item">

    <Link to={`/home/albums/${album.id}`}>
      <p>
        <img src={album.image_url}></img>
      </p>
      <p className="album-title">{album.title}</p>
    </Link>

    <p>{album.artist}</p>
  </div>
);

export default withRouter(AlbumIndexItem);
