class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.other_users_reviews(current_user.id, params[:album_id])
    @current_user_review = Review.current_user_review(current_user.id, params[:album_id])[0]
  end

  def create
    @review = Review.new(reviews_params)
    @review.user_id = current_user.id

    if @review.save
      @reviews = Review.other_users_reviews(current_user.id, @review.album_id)
      @current_user_review = @review

      render '/api/reviews/index'
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
      @reviews = @review.album.reviews
      @current_user_review = @review

      render 'api/reviews/index'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    review = Review.find_by(id: params[:id])
    album = review.album

    review.destroy
    @reviews = Review.other_users_reviews(current_user.id, album.id)
    @current_user_review = Review.current_user_review(current_user.id, album.id)[0]

    render 'api/reviews/index'
  end

  private
  def reviews_params
    params.require(:review).permit(:rating, :body, :album_id)
  end
end
