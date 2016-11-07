class Review < ActiveRecord::Base
  validates :user_id, :album_id, presence: true
  validates :body, presence: true, length: { maximum: 10_000 }
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5], allow_nil: true}

  belongs_to :user
  belongs_to :album
end
