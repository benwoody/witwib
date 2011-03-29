class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.string :latitude
      t.string :longitude
      t.text :note

      t.timestamps
    end
    remove_columb :latlong
  end

  def self.down
    drop_table :posts
  end
end
