class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description, :limit => 500

      t.timestamps
    end
    
    add_index :boards, [:user_id, :name], unique: true
  end
end
