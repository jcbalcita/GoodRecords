class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["No such user"], status: 422
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
    else
      render json: ["errors"], status: 404
    end
  end
end
