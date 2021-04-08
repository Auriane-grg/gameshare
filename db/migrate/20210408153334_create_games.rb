class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.string :category
      t.string :condition
      t.integer :min_age
      t.integer :max_age
      t.integer :min_players
      t.integer :max_players
      t.string :time
      t.string :content

      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
