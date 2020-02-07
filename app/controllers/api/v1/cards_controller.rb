class Api::V1::CardsController < ApplicationController
  def search
    render json: MTG::Card.where(name: params[:query]).all
  end
end
