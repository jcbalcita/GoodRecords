class ChangeStatusColumn < ActiveRecord::Migration
  def change
    remove_column :album_statuses, :status
    add_column :album_statuses, :status, :string
  end
end
