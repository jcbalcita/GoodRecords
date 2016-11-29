import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
        LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: [""]
};

const SessionReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.currentUser = null;
      let errors = [].concat.apply([], action.errors);
      newState.errors = errors;
      return newState;
    case LOGOUT:
      return merge({}, defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
