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

  def self.find_by_search_term(search_term)
    Album.where('lower(title) LIKE ? OR lower(artist) LIKE ?', "%#{search_term}%", "%#{search_term}%")
  end

  def self.no_results
    { albums: {}, specificRender: false, crateRender: false }
  end

  def self.no_search_results
     { albums: {}, specificRender: 'no_results', crateRender: false }
  end
end
