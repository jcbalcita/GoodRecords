class Api::AlbumsController < ApplicationController

  def index
    if (params[:status])
      @albums = Album.find_by_status(current_user.id, params[:status])
      @filter = params[:status]
    else
      @albums = Album.all
      @filter = false
    end

  end

  def show
    @album = Album.find_by(id: params[:id])
    status = AlbumStatus.find_by(album_id: @album.id, user_id: current_user.id)

    @status = status ? status.status : ""
    @id = status ? status.id : ""
  end
end
