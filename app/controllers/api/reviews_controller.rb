class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where('album_id = ?', params[:album_id]).where('user_id != ?', current_user.id)
    @current_user_review = Review.where('album_id = ?', params[:album_id]).where('user_id = ?', current_user.id)
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
