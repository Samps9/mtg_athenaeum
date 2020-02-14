class AddMoreEssentialsToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :mana_cost, :string
    add_column :cards, :cmc, :integer
    add_column :cards, :layout, :string
    add_column :cards, :card_type, :string
    add_column :cards, :text, :string
    add_column :cards, :flavor, :string
    add_column :cards, :power, :string
    add_column :cards, :toughness, :string
    add_column :cards, :rarity, :string
    add_column :cards, :set_code, :string
    add_column :cards, :set_name, :string
    add_column :cards, :mtg_id, :string
    add_column :cards, :multiverse_id, :integer
  end
end
