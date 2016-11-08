Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index, :show]
    resources :album_statuses, only: [:create, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  root to: "static_pages#root"
end
