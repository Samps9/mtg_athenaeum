class Api::V1::CardsController < ApplicationController
  def search
    render json: Card.where('name LIKE ?', "%#{params[:query]}%")
  end
end
