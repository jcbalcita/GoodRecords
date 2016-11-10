class CreateCratings < ActiveRecord::Migration
  def change
    create_table :cratings do |t|
      t.integer :album_id, null: false
      t.integer :crate_id, null: false
      t.index [:album_id, :crate_id], unique: true
      t.index [:crate_id]

      t.timestamps
    end
  end
end
