class CreateDeckCards < ActiveRecord::Migration[5.2]
  def change
    create_table :deck_cards do |t|
      t.references :deck, index: true, foreign_key: true
      t.references :card, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
