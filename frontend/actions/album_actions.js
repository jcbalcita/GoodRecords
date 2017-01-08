export const REQUEST_ALL_ALBUMS = "REQUEST_ALL_ALBUMS";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const REQUEST_USER_ALBUMS = "REQUEST_USER_ALBUMS";
export const REQUEST_ALBUM = "REQUEST_ALBUM";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REQUEST_NEW_STATUS = "REQUEST_NEW_STATUS";
export const REQUEST_UPDATE_STATUS = "REQUEST_UPDATE_STATUS";
export const REQUEST_REMOVE_STATUS = "REQUEST_REMOVE_STATUS";
export const CLEAR_ALBUMS = "CLEAR_ALBUMS";
export const REQUEST_SEARCH_RESULTS = "REQUEST_SEARCH_RESULTS";

export const requestAllAlbums = () => ({
  type: REQUEST_ALL_ALBUMS
});

export const requestUserAlbums = status => ({
  type: REQUEST_USER_ALBUMS,
  status
});

export const clearAlbums = status => ({
  type: CLEAR_ALBUMS,
  status
});

export const requestAlbum = id => ({
  type: REQUEST_ALBUM,
  id
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const requestNewStatus = (status, albumId) => ({
  type: REQUEST_NEW_STATUS,
  status,
  albumId
});

export const requestUpdateStatus = (id, status, albumId) => ({
  type: REQUEST_UPDATE_STATUS,
  id,
  status,
  albumId
});

export const requestRemoveStatus = (id, albumId) => ({
  type: REQUEST_REMOVE_STATUS,
  id,
  albumId
});

export const requestSearchResults = searchTerm => ({
  type: REQUEST_SEARCH_RESULTS,
  searchTerm
})
