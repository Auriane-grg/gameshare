class GamesController < ApplicationController
  before_action :authenticate_user!, only: :new

  def index
    @games = policy_scope(Game)
  end

  def show
    @game = Game.find(params[:id])
    authorize @game
  end

  def new
    @game = Game.new
    authorize @game
  end

  def create
    @game = Game.new(game_params)
    @game.user = current_user
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

    redirect_to game_path(@game)

  end

  def destroy
    @game = Game.find(params[:id])
    authorize @game
    @game.destroy

    redirect_to games_path
  end

  private

  def game_params
    params.require(:game).permit(:name, :price, :description, :category, :condition, :min_age, :max_age, :min_players, :max_players, :time, :content)
  end
  
end
