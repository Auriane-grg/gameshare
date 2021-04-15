class AddCityToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :city, :string
    add_column :games, :city_code, :string
  end
end
