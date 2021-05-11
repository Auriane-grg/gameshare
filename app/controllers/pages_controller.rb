class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def my_games
    @games = Game.where(user: current_user)
    @user = current_user
  end


  def my_games_bookings
    @games = Game.where(user: current_user)
  end

  def my_bookings
    @bookings = Booking.where(user: current_user)
  end
  
end
@book