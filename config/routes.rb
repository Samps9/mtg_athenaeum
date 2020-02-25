Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cards/search/*query', to: 'cards#search'
    end
  end
  
  devise_for :users
  root 'home#index'
  get '/*path' => 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 
end
