class CreateRegistrations < ActiveRecord::Migration[6.0]
  def change
    create_table :registrations do |t|
      t.integer :user_id
      t.integer :device_id
      t.integer :plan_id
      t.datetime :expiry_date

      t.timestamps
    end
  end
end
