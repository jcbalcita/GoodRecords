import { requestAllAlbums,
         REQUEST_ALL_ALBUMS,
         receiveAllAlbums,
         REQUEST_USER_ALBUMS,
         RECEIVE_ALBUM,
         REQUEST_ALBUM,
         receiveAlbum } from '../actions/album_actions';

import { fetchAllAlbums,
         fetchUserAlbums,
         fetchAlbum } from '../util/album_api_util';

export default ({ getState, dispatch }) => next => action => {
  const fetchAlbumsSuccess = albums => dispatch(receiveAllAlbums(albums));
  const fetchAlbumSuccess = album => dispatch(receiveAlbum(album));

  switch (action.type) {
    case REQUEST_ALL_ALBUMS:
      fetchAllAlbums(fetchAlbumsSuccess);
    case REQUEST_USER_ALBUMS:
      fetchUserAlbums(action.status, fetchAlbumsSuccess);
    case REQUEST_ALBUM:
      fetchAlbum(action.id, fetchAlbumSuccess);
    default:
      return next(action);
  }
};
