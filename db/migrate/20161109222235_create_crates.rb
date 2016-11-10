class CreateCrates < ActiveRecord::Migration
  def change
    create_table :crates do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.index [:user_id, :name], unique: true

      t.timestamps
    end
  end
end
