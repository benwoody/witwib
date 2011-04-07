class UpdateAddLatlong < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
    t.rename :latitude, :latlong
    t.remove :longitude
    end
  end

  def self.down
  end
end
