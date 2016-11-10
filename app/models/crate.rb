class Crate < ActiveRecord::Base
  validates :user_id, :name, presence: true

  belongs_to :user
  has_many :cratings, dependent: :destroy
  has_many :albums,
    through: :cratings,
    source: :album
end
