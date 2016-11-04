export const fetchAllAlbums = success => {
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    success
  });
};

export const fetchUserAlbums = (status, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data: {status},
    success
  });
};

export const fetchAlbum = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`,
    success
  });
};
