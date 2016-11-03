import { requestAllAlbums,
         REQUEST_ALL_ALBUMS,
         receiveAllAlbums,
         REQUEST_USER_ALBUMS } from '../actions/album_actions';
import { fetchAllAlbums, fetchUserAlbums } from '../util/album_api_util';

export default ({ getState, dispatch }) => next => action => {
  const fetchAlbumsSuccess = albums => dispatch(receiveAllAlbums(albums));

  switch (action.type) {
    case REQUEST_ALL_ALBUMS:
      fetchAllAlbums(fetchAlbumsSuccess);
    case REQUEST_USER_ALBUMS:
      fetchUserAlbums(action.status, fetchAlbumsSuccess);
    default:
      return next(action);
  }
};
