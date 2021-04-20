class GamesController < ApplicationController
  before_action :authenticate_user!, only: :new

  def index
    @games = policy_scope(Game)
    @games = @games.where(category: params[:category]) if params.dig(:category).present?
    if params.dig(:age).present?
      @games = @games.where("? BETWEEN games.min_age AND games.max_age", params[:age])
    end
    if params.dig(:players).present?
      @games = @games.where("? BETWEEN games.min_players AND games.max_players", params[:players])
    end

    if params.dig(:max_price).present?
      @games = @games.where("? >= games.price", params[:max_price])
    end
    
    if params.dig(:city).present?
      @games = @games.where(city: params[:city].capitalize.lstrip.rstrip)
    end

  end

  def show
    @game = Game.find(params[:id])
    authorize @game
    @booking = Booking.new
  end

  def new
    @game = Game.new
    authorize @game
  end

  def create
    @game = Game.new(game_params)
    @game.user = current_user
    @game.city = current_user.city.capitalize.lstrip.rstrip
    @game.city_code = current_user.city_code.lstrip
    authorize @game
    if @game.save
      redirect_to game_path(@game)
    else
      render :new
    end
  end

  def edit
    @game = Game.find(params[:id])
    authorize @game
  end

  def update
    @game = Game.find(params[:id])
    authorize @game
    @game.update(game_params)

    redirect_to dashboard_path

  end

  def destroy
    @game = Game.find(params[:id])
    authorize @game
    @game.destroy

    redirect_to dashboard_path
  end

  private

  def game_params
    params.require(:game).permit(:name, :price, :description, :category, :condition, :min_age, :max_age, :min_players, :max_players, :time, :content, :photo)
  end
  
end