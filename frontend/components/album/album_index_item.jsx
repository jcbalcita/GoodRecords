import React from 'react';
import { Link, withRouter } from 'react-router';

const AlbumIndexItem = ({album}) => (
  <span className="album-index-item">
    <p>
      <img src={album.image_url}></img>
    </p>
    <p>{album.title}</p>
    <p>{album.artist}</p>
  </span>
);

export default withRouter(AlbumIndexItem);
