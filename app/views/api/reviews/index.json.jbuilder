json.currentAlbumReviews do
  @reviews.each do |review|
    json.set! review.id, review
  end
end
json.set! :fetched, true
