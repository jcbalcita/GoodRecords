Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index, :show]
  end

  root to: "static_pages#root"
end
