class RemoveColumnsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index(:users, :username)
    remove_column(:users, :username)
    
    remove_column(:users, :age)
    remove_column(:users, :language)
    remove_column(:users, :location)
  end
end
