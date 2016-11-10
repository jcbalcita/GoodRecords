class Api::CratesController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @crates = user.crates

    render json: @crates
  end

  def show

  end

  def create
  end

  def destroy
  end
end
