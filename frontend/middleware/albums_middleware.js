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
         requestRemoveStatus,
         REQUEST_SEARCH_RESULTS } from '../actions/album_actions';

import { requestReviews } from '../actions/review_actions';

import { fetchAllAlbums,
         fetchUserAlbums,
         fetchAlbum,
         createStatus,
         updateStatus,
         removeStatus,
         fetchSearchResults } from '../util/album_api_util';

import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const fetchAlbumsSuccess = albums => {
    dispatch(receiveAllAlbums(albums));
    hashHistory.push('/home');
  }

  const fetchAlbumSuccess = album => {
    dispatch(receiveAlbum(album));
    dispatch(requestReviews(album.id));
  }

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
      return updateStatus(action.id, action.status, action.albumId, fetchAlbumSuccess);
    case REQUEST_REMOVE_STATUS:
      return removeStatus(action.id, action.albumId, fetchAlbumSuccess);
    case REQUEST_SEARCH_RESULTS:
      return fetchSearchResults(action.searchTerm, fetchAlbumsSuccess);
    default:
      return next(action);
  }
};
