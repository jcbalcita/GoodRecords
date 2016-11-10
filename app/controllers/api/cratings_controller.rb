class Api::CratingsController < ApplicationController
  def index
    album = Album.find_by(id: params[:album_id])
    @cratings = album.cratings.joins(:crate).where('crates.user_id = ?', current_user.id)
  end

  def create
    @crating = Crating.new(crating_params)

    if @crating.save
      render :show
    else
      render json: @crating.errors.full_messages, status: 422
    end
  end

  def destroy
    @crating = Crating.find_by(id: params[:id])
    render json: { id: params[:id] }
  end

  private
  def crating_params
    params.require(:crating).permit(:album_id, :crate_id)
  end
end
