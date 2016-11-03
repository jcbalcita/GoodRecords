import { RECEIVE_ALL_ALBUMS, receiveAllAlbums } from '../actions/album_actions';
import merge from 'lodash/merge';

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export default AlbumsReducer;
