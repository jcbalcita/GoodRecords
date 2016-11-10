// CRATE AJAX REQUESTS
export const fetchCrates = () => {
  $.ajax({
    method: 'GET',
    url: '/api/crates',
    success
  });
};

export const createCrate = crate => {
  $.ajax({
    method: 'POST',
    url: '/api/crates',
    crate,
    success
  });
};

export const deleteCrate = id => {
  $.ajax({
    method: 'DELETE',
    url: `/api/crates/${id}`,
    success
  });
};

// CRATINGS AJAX REQUESTS
export const fetchCratings = albumId => {
  $.ajax({
    method: 'GET',
    url: `/api/cratings`,
    data: { album_id: albumId }
    success
  });
};

export const createCrating = crating => {
  $.ajax({
    method: 'POST',
    url: `/api/cratings/`,
    data: { crating },
    success
  });
};


export const deleteCrating = id => {
  $.ajax({
    method: 'DELETE',
    url: `/api/cratings/${id}`,
    success
  });
};
