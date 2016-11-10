class Crating < ActiveRecord::Base
  validates :album_id, :crate_id, presence: true

  belongs_to :crate
  belongs_to :album
  has_one :user,
    through: :crate,
    source: :user
end
