export const receiveAllAlbums = success => {
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    success
  });
};
