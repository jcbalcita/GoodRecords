json.currentAlbumReviews do
  @reviews.each do |review|
    json.partial! 'api/reviews/review', review: review
  end
end

json.currentUserReview @current_user_review
