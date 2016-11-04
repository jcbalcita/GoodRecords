export const REQUEST_ALL_ALBUMS = "REQUEST_ALL_ALBUMS";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const REQUEST_USER_ALBUMS = "REQUEST_USER_ALBUMS";
export const REQUEST_ALBUM = "REQUEST_ALBUM";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const requestAllAlbums = () => ({
  type: REQUEST_ALL_ALBUMS
});


export const requestUserAlbums = status => ({
  type: REQUEST_USER_ALBUMS,
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
