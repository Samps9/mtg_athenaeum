class Deck < ApplicationRecord
  validates :name, presence: true
  has_many :cards
end
