export const REQUEST_CRATES = "REQUEST_CRATES";
export const RECEIVE_CRATES = "RECEIVE_CRATES";
export const REQUEST_DELETE_CRATE = "REQUEST_DELETE_CRATE";
export const REQUEST_ADD_CRATE = "REQUEST_ADD_CRATE";
export const PROCESS_DELETE_CRATE = "PROCESS_DELETE_CRATE";

export const REQUEST_ADD_CRATING = "REQUEST_ADD_CRATING";
export const REQUEST_DELETE_CRATING = "REQUEST_DELETE_CRATING";
export const REQUEST_CRATINGS = "REQUEST_CRATINGS";
export const RECEIVE_CRATINGS = "RECEIVE_CRATINGS";
export const PROCESS_DELETE_CRATING = "PROCESS_DELETE_CRATING";

// CRATE ACTIONS
export const requestCrates = () => ({
  type: REQUEST_ALL_ALBUMS
});

export const requestAddCrate = crate => ({
  type: REQUEST_ADD_CRATE,
  crate
});

export const requestDeleteCrate = id => ({
  type: REQUEST_DELETE_CRATE,
  id
});

export const receiveCrates = crates => ({
  type: RECEIVE_CRATES,
  crates
});

export const processDeleteCrate = id => ({
  type: PROCESS_DELETE_CRATE,
  id
});

// CRATING ACTIONS
export const requestCratings = albumId => ({
  type: REQUEST_CRATINGS,
  albumId
});

export const requestAddCrating = crating => ({
  type: REQUEST_ADD_CRATING,
  crating
});

export const requestDeleteCrating = id => ({
  type: REQUEST_ADD_CRATING,
  id
});

export const processDeleteCrating = id => ({
  type: PROCESS_DELETE_CRATING,
  id
});
