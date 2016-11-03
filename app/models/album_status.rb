class AlbumStatus < ActiveRecord::Base
  validates :user, :album, presence: true
  validates :status, inclusion: { in: ['owned', 'wishlist', 'want to listen'],
                                  allow_nil: true }

  belongs_to :user
  belongs_to :album
end
