class AddInfosToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone, :string
    add_column :users, :city, :string
    add_column :users, :city_code, :string
    add_column :users, :street_number, :string
    add_column :users, :street, :string
  end
end
