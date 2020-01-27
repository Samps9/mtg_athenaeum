class Api::V1::DecksController < ApplicationController
  def index
    render json: [MTG::Card.find(386616)]
  end
end
