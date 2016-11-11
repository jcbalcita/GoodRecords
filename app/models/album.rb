class Album < ActiveRecord::Base
  validates :artist, :title, :year, presence: true

  has_many :album_statuses
  has_many :reviews
  has_many :cratings, dependent: :destroy

  has_many :crates,
    through: :cratings,
    source: :crate

  has_many :users,
    through: :album_statuses,
    source: :user

  def self.find_by_status(id, status)
    Album.joins(:album_statuses).where('album_statuses.user_id  = ?', id).
                                 where('album_statuses.status = ?', status)
  end

  def self.no_results
    { albums: {}, specificRender: false, crateRender: false }
  end

  def self.filter_out_listed_albums(id)
    Album.joins(:album_statuses).where('album_statuses.user_id  != ?', id)
  end
end
