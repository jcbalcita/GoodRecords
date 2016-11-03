export const REQUEST_ALL_ALBUMS = "REQUEST_ALL_ALBUMS";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const REQUEST_USER_ALBUMS = "REQUEST_USER_ALBUMS";

export const requestAllAlbums = () => ({
  type: REQUEST_ALL_ALBUMS
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const requestUserAlbums = status => ({
  type: REQUEST_USER_ALBUMS,
  status
});
