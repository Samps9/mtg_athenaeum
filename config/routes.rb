Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      get 'decks/index'
    end
  end
  devise_for :users
  root 'home#index'
  get '/*path' => 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 
end
