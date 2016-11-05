class Api::AlbumStatusesController < ApplicationController
  def create
    status = AlbumStatus.new(status: params[:status],
                             user_id: current_user.id,
                             album_id: params[:album_id])
    if status.save
      @status = status.status
      @id = status.id
      @album = Album.find_by(id: params[:album_id])
      render '/api/albums/show'
    else
      render json: ["Error"], status: :unproccessable_entity
    end
  end

  def update
    status = AlbumStatus.find_by(id: params[:id])
    if status
      status.update_attribute("status", params[:status])
      @album = Album.find_by(id: params[:album_id])
      @status = status.status
      @id = status.id

      render '/api/albums/show'
    else
      render json: ["Error"], status: :unproccessable_entity
    end
  end

  def destroy
    status = AlbumStatus.find_by(id: params[:id])
    @album = Album.find_by(id: params[:album_id])
    status.destroy

    @status = ""
    @id = ""

    render 'api/albums/show'
  end

  private
  def album_params
    params.permit(:id, :status, :album_id)
  end
end
