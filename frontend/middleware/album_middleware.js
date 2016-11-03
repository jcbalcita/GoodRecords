import { requestAllAlbums,
         REQUEST_ALL_ALBUMS,
         receiveAllAlbums,
         RECEIVE_ALL_ALBUMS } from '../actions/album_actions';
import { fetchAllAlbums } from '../util/album_api_util';

export default ({ getState, dispatch }) => next => action => {
  const fetchAlbumsSuccess = albums => dispatch(receiveAllAlbums(albums));

  switch (action.type) {
    case REQUEST_ALL_ALBUMS:
      fetchAllAlbums(fetchAlbumss);
    default:
      return next(action);
  }
};
