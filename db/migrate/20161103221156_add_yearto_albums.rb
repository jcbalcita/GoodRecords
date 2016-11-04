class AddYeartoAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :year, :date, null: false
  end
end
