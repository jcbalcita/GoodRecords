class Album < ActiveRecord::Base
  validates :artist, :title, presence: true

  has_many :album_statuses
  has_many :users,
    through: :album_statuses,
    source: :user
end
