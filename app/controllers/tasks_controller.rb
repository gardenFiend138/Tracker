class TasksController < ApplicationController
  def index
    tasks = Task.order("created_at DESC")
    render json: tasks
  end

  def create
    task = Task.create(task_params)
    render json: task
  end

  def update
    task = Task.find(params[:id])
    task.update_attributes(task_params)
    render json: task
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    head :no_content, status: :ok
  end

  private
    def task_param
      params.require(:task).permit(:title, :user_id, :is_complete)
    end
end
