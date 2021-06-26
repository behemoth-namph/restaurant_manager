Rails.application.routes.draw do
  root to: "shop/home#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :shop do
    root to: "home#index"
    resources :about, only: %i[index]
  end
end
