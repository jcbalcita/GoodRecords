class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.other_users_reviews(current_user.id, params[:album_id])
    @current_user_review = Review.current_user_review(current_user.id, params[:album_id])[0]
  end

  def create
    @review = Review.new(reviews_params)
    @review.user_id = current_user.id

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find_by(id: params[:id])

    render json: @review
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.update_attributes(review_params)
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy

    render json: {}
  end

  private
  def reviews_params
    params.require(:review).permit(:rating, :body, :album_id)
  end
end
