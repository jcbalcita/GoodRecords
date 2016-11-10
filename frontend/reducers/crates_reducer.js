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
      return merge({}, state, { userCrates: action.crates });
    case RECEIVE_CRATE:
      newState.userCrates = merge(newState.userCrates, action.crate);
      return newState;
    case PROCESS_DELETE_CRATE:
      delete newState.userCrates[action.id];
      return newState;
    case RECEIVE_CRATINGS:
      return merge({}, state, { albumCratings: action.cratings });
    case RECEIVE_CRATING:
      newState.albumCratings[action.crating.id] = action.crating;
      return newState;
    case PROCESS_DELETE_CRATING:
      delete newState.albumCratings[action.id]
      return newState;
    default:
      return state;
  }
}

export default CratesReducer;
