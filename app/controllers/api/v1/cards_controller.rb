class Api::V1::CardsController < ApplicationController
  def search
    cards = Card.where('name LIKE ?', "%#{params[:query].downcase}%")
    if cards.present?
      render json: cards
    else
      render json: [ "No results found" ]
    end
  end
end
