class Deck < ApplicationRecord
  validates :name, presence: true
  has_many :deck_cards
  has_many :cards, through: :deck_cards
  belongs_to :user
end
