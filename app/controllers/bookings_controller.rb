class BookingsController < ApplicationController

  def new
    @booking = Booking.new
    authorize @booking
  end

  def create
    @game = Game.find(params[:game_id])
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    @booking.game = @game
    authorize @booking
    if @booking.save
      redirect_to dashboard_path
    else
      render :new
    end
  end
  
  private

  def booking_params
    params.require(:booking).permit(:start, :end, :user_id, :game_id)
  end

end
