import { REQUEST_CRATES,
         requestCrates,
         RECEIVE_CRATES,
         receiveCrates,
         REQUEST_DELETE_CRATE,
         requestDeleteCrate,
         REQUEST_ADD_CRATE,
         requestAddCrate,
         PROCESS_DELETE_CRATE,
         processDeleteCrate,
         receiveCrate,
         RECEIVE_CRATING,
         receiveCrating,
         PROCESS_DELETE_CRATING,
         processDeleteCrating,
         REQUEST_CRATINGS,
         REQUEST_ADD_CRATING,
         REQUEST_DELETE_CRATING,
         receiveCratings,
         REQUEST_CRATE_ALBUMS } from '../actions/crate_actions';

import { receiveAllAlbums } from '../actions/album_actions';

import { fetchCrates,
         createCrate,
         deleteCrate,
         fetchCratings,
         createCrating,
         deleteCrating,
         fetchCrateAlbums } from '../util/crate_api_util';

import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const cratesSuccess = crates => dispatch(receiveCrates(crates));
  const crateSuccess = crate => dispatch(receiveCrate(crate));
  const deleteCrateSuccess = id => dispatch(processDeleteCrate(id));

  const albumCratesSuccess = albums => {
    dispatch(receiveAllAlbums(albums));
    hashHistory.push('/home');
  };

  const cratingsSuccess = cratings => dispatch(receiveCratings(cratings));
  const cratingSuccess = crating => dispatch(receiveCrating(crating));
  const deleteCratingSuccess = id => dispatch(processDeleteCrating(id));

  switch (action.type) {
    case REQUEST_CRATES:
      return fetchCrates(cratesSuccess);
    case REQUEST_CRATE_ALBUMS:
      return fetchCrateAlbums(action.id, albumCratesSuccess)
    case REQUEST_ADD_CRATE:
      return createCrate(action.crate, crateSuccess);
    case REQUEST_DELETE_CRATE:
      return deleteCrate(action.id, deleteCrateSuccess);
    case REQUEST_CRATINGS:
      return fetchCratings(action.albumId, cratingsSuccess);
    case REQUEST_ADD_CRATING:
      return createCrating(action.crating, cratingSuccess);
    case REQUEST_DELETE_CRATING:
      return deleteCrating(action.id, deleteCratingSuccess);
   default:
      return next(action)
   }
 };
