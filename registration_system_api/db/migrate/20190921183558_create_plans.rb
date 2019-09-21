class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.string :name
      t.integer :device_id
      t.string :restrictions
      t.string :gigabytes
      t.integer :cost

      t.timestamps
    end
  end
end
