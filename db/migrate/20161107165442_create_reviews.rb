class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.text :body, null: false
      t.integer :rating
      t.index [:user_id, :album_id], unique: true
      t.index [:album_id]

      t.timestamps
    end
  end
end
