export const REQUEST_ALL_ALBUMS = "REQUEST_ALL_ALBUMS";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";

export const requestAllAlbums = () => ({
  type: REQUEST_ALL_ALBUMS
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});
