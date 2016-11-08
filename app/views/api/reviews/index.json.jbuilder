json.currentAlbumReviews do
  @reviews.each do |review|
    json.set! review.id, review
  end
end
