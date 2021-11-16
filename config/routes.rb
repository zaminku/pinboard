Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index] # check if index causes any bugs
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:create, :update, :destroy, :index, :show]
    resources :boards, only: [:create, :update, :destroy, :index, :show]
    resources :boards_pins, only: [:create, :index, :destroy]
    resources :comments, only: [:create, :index, :destroy, :show]
  end

  root to: "static_pages#root"
end
