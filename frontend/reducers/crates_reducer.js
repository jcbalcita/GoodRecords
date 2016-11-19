import { PROCESS_DELETE_CRATE,
         RECEIVE_CRATES,
         RECEIVE_CRATE,
         RECEIVE_CRATING,
         PROCESS_DELETE_CRATING,
         RECEIVE_CRATINGS } from '../actions/crate_actions';

import merge from 'lodash/merge';

const defaultState = { userCrates: {}, albumCratings: {} }

const CratesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CRATES:
      newState.userCrates = action.crates;
      return newState;
    case RECEIVE_CRATE:
      newState.userCrates = merge(newState.userCrates, action.crate);
      return newState;
    case PROCESS_DELETE_CRATE:
      delete newState.userCrates[action.id];
      return newState;
    case RECEIVE_CRATINGS:
      newState.albumCratings = action.cratings;
      return newState;
    case RECEIVE_CRATING:
      let merged = merge(newState.albumCratings, action.crating)
      newState.albumCratings = merged;
      return newState;
    case PROCESS_DELETE_CRATING:
      delete newState.albumCratings[parseInt(action.id)]
      return newState;
    default:
      return state;
  }
}

export default CratesReducer;
