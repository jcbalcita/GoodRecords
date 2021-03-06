export const fetchReviews = (albumId, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: { album_id: albumId },
    success
  });
};

export const fetchReview = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/review/${id}`,
    data: { id },
    success
  });
}

export const createReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review },
    success
  });
};

export const updateReview = (review, success) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review },
    success
  });
};

export const removeReview = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
    id: { id },
    success
  });
};
