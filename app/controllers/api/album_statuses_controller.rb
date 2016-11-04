class Api::AlbumStatusesController < ApplicationController
  def create
    status = AlbumStatus.new(status: params[:status],
                             user_id: current_user.id,
                             album_id: params[:album_id])
    if status.save
      @status = status
      @album = Album.find_by(id: @album.id)
      render '/api/albums/show'
    else
      render json: ["Error"], status: :unproccessable_entity
    end
  end

  def update

  end

  def destroy

  end

end
