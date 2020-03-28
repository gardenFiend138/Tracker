class Tasks < ActiveRecord::Migration[6.0]
  def change
    change_column :tasks, :is_complete, :boolean, default: false
  end
end
