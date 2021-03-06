class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.boolean :is_complete
      t.integer :user_id, foreign_key: true

      t.timestamps
    end
  end
end
