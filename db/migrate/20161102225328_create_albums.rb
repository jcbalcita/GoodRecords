class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :artist, null: false
      t.string :title, null: false
      t.string :image_url, default: 'http://res.cloudinary.com/jcbalcita/image/upload/c_scale,w_352/v1478127067/vinyl-record-isolated_x2dqmi.jpg'
      t.text :description
      t.index [:title]
      t.index [:artist]

      t.timestamps
    end
  end
end
