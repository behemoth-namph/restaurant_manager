module Shop
  class BaseController < ApplicationController
    DEFAULT_PER_PAGE = 30
    MAX_PER_PAGE = 100

    helper_method :current_shop, :logged_in?

    private

    def current_shop
      @current_shop ||= current_shop_account&.shop
    end

    def logged_in?
      current_shop_account.present?
    end
  end
end
