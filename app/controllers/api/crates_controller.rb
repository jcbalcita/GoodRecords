class Api::CratesController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @crates = user.crates
  end

  def show
  end

  def create
    @crate = Crate.new(crate_params)
    @crate.user_id = current_user.id

    if @crate.save
      render json: @crate
    else
      render json: @crate.errors.full_messages, status: 422
    end
  end

  def destroy
    crate = Crate.find_by(id: params[:id])
    crate.destroy

    render json: { id: params[:id] }
  end

  private
  def crate_params
    params.require(:crate).permit(:name)
  end
end
