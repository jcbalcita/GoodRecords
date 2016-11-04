class CreateAlbumStatuses < ActiveRecord::Migration
  def change
    create_table :album_statuses do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.string :status, null: false

      t.index [:user_id, :album_id], unique: true
      t.index [:album_id]
      t.timestamps
    end
  end
end
