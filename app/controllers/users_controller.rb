class UsersController < ApplicationController
  def index
    users = User.order("name DESC")
    render json: users
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)
    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render head :no_content, status: :ok
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :phone_number)
    end
end
