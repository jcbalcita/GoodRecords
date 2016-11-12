// CRATE AJAX REQUESTS
export const fetchCrates = success => {
  $.ajax({
    method: 'GET',
    url: '/api/crates',
    success
  });
};

export const fetchCrateAlbums = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/crates/${id}`,
    success
  });
};

export const createCrate = (crate, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/crates',
    data: { crate },
    success
  });
};

export const deleteCrate = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/crates/${id}`,
    success
  });
};

// CRATINGS AJAX REQUESTS
export const fetchCratings = (albumId, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/cratings`,
    data: { album_id: albumId },
    success
  });
};

export const createCrating = (crating, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/cratings/`,
    data: { crating },
    success
  });
};

export const deleteCrating = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/cratings/${id}`,
    success
  });
};
