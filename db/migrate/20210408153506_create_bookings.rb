class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.date :start
      t.date :end

      t.references :user, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true


      t.timestamps
    end
  end
end
