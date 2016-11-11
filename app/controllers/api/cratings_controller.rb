class Api::CratingsController < ApplicationController
  def index
    album = Album.find_by(id: params[:album_id])
    @crates = album.crates
    render 'api/crates/index'
  end

  def create
    @crating = Crating.new(crating_params)
    user = User.find_by(id: current_user.id)

    if @crating.save
      @crates = user.crates
      render 'api/crates/index'
    else
      render json: @crating.errors.full_messages, status: 422
    end
  end

  def destroy
    crating = Crating.find_by(album_id: params[:album_id], crate_id: params[:crate_id])
    id = crating.id
    crating.destroy

    render json: { id: id }
  end

  private
  def crating_params
    params.require(:crating).permit(:album_id, :crate_id)
  end
end
