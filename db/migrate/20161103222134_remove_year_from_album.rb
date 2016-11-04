class RemoveYearFromAlbum < ActiveRecord::Migration
  def change
    remove_column :albums, :year
    add_column :albums, :year, :integer, null: false
  end
end
