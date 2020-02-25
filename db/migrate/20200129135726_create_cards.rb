class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
