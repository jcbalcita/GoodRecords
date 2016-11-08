json.set! review.id do
  json.(review, :id, :user_id, :album_id, :rating, :body)
  json.author review.user.username
end
