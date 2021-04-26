class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def my_games
    @games = Game.where(user: current_user)
    authorize @games
    @user = current_user
  end
end
