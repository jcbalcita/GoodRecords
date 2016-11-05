import { requestAllAlbums,
         REQUEST_ALL_ALBUMS,
         receiveAllAlbums,
         REQUEST_USER_ALBUMS,
         RECEIVE_ALBUM,
         REQUEST_ALBUM,
         receiveAlbum,
         requestNewStatus,
         REQUEST_NEW_STATUS,
         REQUEST_UPDATE_STATUS,
         REQUEST_REMOVE_STATUS,
         requestRemoveStatus } from '../actions/album_actions';

import { fetchAllAlbums,
         fetchUserAlbums,
         fetchAlbum,
         createStatus,
         updateStatus,
         removeStatus } from '../util/album_api_util';

export default ({ getState, dispatch }) => next => action => {
  const fetchAlbumsSuccess = albums => dispatch(receiveAllAlbums(albums));
  const fetchAlbumSuccess = album => dispatch(receiveAlbum(album));

  switch (action.type) {
    case REQUEST_ALL_ALBUMS:
      return fetchAllAlbums(fetchAlbumsSuccess);
    case REQUEST_USER_ALBUMS:
      return fetchUserAlbums(action.status, fetchAlbumsSuccess);
    case REQUEST_ALBUM:
      return fetchAlbum(action.id, fetchAlbumSuccess);
    case REQUEST_NEW_STATUS:
      return createStatus(action.status, action.albumId, fetchAlbumSuccess);
    case REQUEST_UPDATE_STATUS:
      return updateStatus(action.id, action.albumId, fetchAlbumSuccess);
    case REQUEST_REMOVE_STATUS:
      return removeStatus(action.id, action.albumId, fetchAlbumSuccess);
    default:
      return next(action);
  }
};
