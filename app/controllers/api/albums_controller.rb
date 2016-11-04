class Api::AlbumsController < ApplicationController

  def index
    if (params[:status])
      @albums = Album.find_by_status(current_user.id, params[:status])
    else
      @albums = Album.all
    end

    render json: @albums
  end

  def show
    @album = Album.find_by(id: params[:id])
    @status = AlbumStatus.find_by(album_id: @album.id, user_id: current_user.id)
  end
end
