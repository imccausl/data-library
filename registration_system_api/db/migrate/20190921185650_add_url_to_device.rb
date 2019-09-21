class AddUrlToDevice < ActiveRecord::Migration[6.0]
  def change
    change_table :devices do |t|
      t.string :url
    end
  end
end
