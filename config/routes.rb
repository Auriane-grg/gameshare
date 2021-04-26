Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :games do
    resources :bookings, only: [:new, :create]
    resources :reviews, only: [:create]

  end

  resources :bookings, only: [:destroy] do
    resources :reviews, only: [:create]
  end

  resource :dashboard, only: [:show] do
    get "/:my_games" => "pages#my_games"
  end

  resources :favorites, only: [:index, :destroy]
  resources :pages, only: [:my_games]
end
