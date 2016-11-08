class Review < ActiveRecord::Base
  validates :user_id, :album_id, presence: true
  validates :body, presence: true, length: { maximum: 10_000 }
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5], allow_nil: true}

  belongs_to :user
  belongs_to :album

  def self.other_users_reviews(user_id, album_id)
    Review.where('album_id = ?', album_id).where('user_id != ?', user_id)
  end

  def self.current_user_review(user_id, album_id)
    Review.where('album_id = ?', album_id).where('user_id = ?', user_id)
  end
end
