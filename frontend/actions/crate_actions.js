export const REQUEST_CRATES = "REQUEST_CRATES";
export const RECEIVE_CRATES = "RECEIVE_CRATES";
export const REQUEST_DELETE_CRATE = "REQUEST_DELETE_CRATE";
export const REQUEST_ADD_CRATE = "REQUEST_ADD_CRATE";
export const PROCESS_DELETE_CRATE = "PROCESS_DELETE_CRATE";
export const RECEIVE_CRATE = "RECEIVE_CRATE";
export const REQUEST_CRATE_ALBUMS = "REQUEST_CRATE_ALBUMS";

export const REQUEST_ADD_CRATING = "REQUEST_ADD_CRATING";
export const REQUEST_DELETE_CRATING = "REQUEST_DELETE_CRATING";
export const REQUEST_CRATINGS = "REQUEST_CRATINGS";
export const RECEIVE_CRATINGS = "RECEIVE_CRATINGS";
export const RECEIVE_CRATING = "RECEIVE_CRATING";
export const PROCESS_DELETE_CRATING = "PROCESS_DELETE_CRATING";

// CRATE ACTIONS
export const requestCrates = () => ({
  type: REQUEST_CRATES
});

export const requestCrateAlbums = id => ({
  type: REQUEST_CRATE_ALBUMS,
  id
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

export const receiveCrate = crate => ({
  type: RECEIVE_CRATE,
  crate
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

export const receiveCratings = cratings => ({
  type: RECEIVE_CRATINGS,
  cratings
});

export const receiveCrating = crating => ({
  type: RECEIVE_CRATING,
  crating
});
