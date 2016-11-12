class Crate < ActiveRecord::Base
  validates :user_id, :name, presence: true

  belongs_to :user
  has_many :cratings, dependent: :destroy

  has_many :albums,
    through: :cratings,
    source: :album


  def album_id_array
    @album_ids = self.albums.map { |album| album.id }
    albums = Jbuilder.new
    albums.array! @album_ids
  end
end
