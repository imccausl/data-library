class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :library_card_number
      t.string :rogers_client_id

      t.timestamps
    end
  end
end
