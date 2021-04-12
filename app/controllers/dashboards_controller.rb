class DashboardsController < ApplicationController

  def show
    @games = Game.where(user: current_user)
    authorize @games
    # @bookings = Booking.where(user: current_user)

    # @review = Review.new

  end

end
