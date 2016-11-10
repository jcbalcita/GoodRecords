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
         processDeleteCrating }

import { fetchCrates,
         createCrate,
         deleteCrate,
         fetchCratings,
         createCrating,
         deleteCrating } from '../util/crate_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const cratesSuccess = crates => dispatch(receiveCrates(crates));
  const crateSuccess = crate => dispatch(receiveCrates(crate));
  const deleteCrateSuccess = id => dispatch(processDeleteCrate(id));

  const cratingsSuccess = cratings => dispatch(receiveCratings(crating));
  const cratingSuccess = crating => dispatch(receiveCrating(crating));
  const deleteCratingSuccess = id => dispatch(processDeleteCrating(id));

  switch (action.type) {
    case REQUEST_CRATES:
      return fetchCrates(cratesSuccess);
    case REQUEST_ADD_CRATE:
      return createCrate(action.crate, crateSuccess);
    case REQUEST_DELETE_CRATE:
      return delteCrate(action.id, deleteCrateSuccess);
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
