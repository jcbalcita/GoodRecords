class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where('album_id = ?', params[:album_id])
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
