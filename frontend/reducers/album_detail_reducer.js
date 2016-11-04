import { RECEIVE_ALBUM,
         receiveAlbum } from '../actions/album_actions';

import merge from 'lodash/merge';

const defaultState = { reviews: [], title: "", description: ""};

const AlbumDetailReducer = (state = { reviews: {} }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALBUM:
      return action.album;
    default:
      return state;
  }
};

export default AlbumDetailReducer;
