class Api::V1::DecksController < ApplicationController
  def index
    render json: Card.all
  end
end
