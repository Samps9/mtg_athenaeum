class Card < ApplicationRecord
  include ShaAttribute
  sha_attribute :mtg_id
end
