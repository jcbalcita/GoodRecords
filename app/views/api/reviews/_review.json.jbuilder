json.set! review.id do
  json.(review, :id, :user_id, :album_id, :rating, :body)
  json.createDate time_ago_in_words(review.created_at)
  json.author review.user.username
end
