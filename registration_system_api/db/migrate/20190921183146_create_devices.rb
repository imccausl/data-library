class CreateDevices < ActiveRecord::Migration[6.0]
  def change
    create_table :devices do |t|
      t.string :name
      t.string :location
      t.integer :deposit_amount

      t.timestamps
    end
  end
end
