# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

card_data = MTG::Card.all

ActiveRecord::Base.transaction do
  card_data.each do |data|
    next if !data.name.present? || !data.multiverse_id.present? || !data.image_url.present?
    puts "Building #{data.name}..."
    # downcase card name is important for search purposes
    card = Card.new(name: data.name.downcase, multiverse_id: data.multiverse_id, image_url: data.image_url) 

    card.mtg_id = data.id if data.id.present?
    card.multiverse_id = data.multiverse_id if data.multiverse_id.present?
    card.layout = data.layout if data.layout.present?
    card.mana_cost = data.mana_cost if data.mana_cost.present?
    card.cmc = data.cmc.to_i if data.cmc.present?
    card.card_type = data.type if data.type.present?
    card.text = data.text if data.text.present?
    card.flavor = data.flavor if data.flavor.present?
    card.power = data.power if data.power.present?
    card.toughness = data.toughness if data.toughness.present?
    card.rarity = data.rarity if data.rarity.present?
    card.set_code = data.set if data.set.present?
    card.set_name = data.set_name if data.set_name.present?

    card.save!
    puts "#{card.name} successfully built and saved!"
  end
end