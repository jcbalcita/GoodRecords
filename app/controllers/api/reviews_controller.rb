class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.find_by(album_id: params[:album_id])
    render json: @reviews
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
