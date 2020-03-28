Rails.application.routes.draw do
  scope '/api/v1' do
    resources :tasks
    resources :users
  end
end
