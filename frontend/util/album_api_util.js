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

export const createStatus = (status, albumId, success) => {
  $.ajax({
    method: 'POST',
    url: `api/album_statuses`,
    data: { status, album_id: albumId },
    success
  });
};

export const updateStatus = (id, albumId, success) => {
  $.ajax({
    method: 'POST',
    url: `api/album_statuses`,
    data: { status, album_id: albumId },
    success
  });
};

export const removeStatus = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/album_statuses`,
    data: { id },
    success
  });
};
