class Api::AlbumsController < ApplicationController
  def index
    if (params[:status])
      @albums = Album.joins(:album_statuses).where('album_statuses.user_id  = ?', current_user.id).where('album_statuses.status = ?', params[:status])
    else
      @albums = Album.all
    end

    render json: @albums
  end

  def show
    @album = Album.find_by(id: params[:id])
  end
end
