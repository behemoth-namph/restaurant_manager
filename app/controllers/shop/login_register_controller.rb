module Shop
  class LoginRegisterController < BaseController
    layout 'application'
    def index; end

    def new
      @shop_account = current_shop.shop_accounts.build(role: :general)
    end

    def create
      return response_error({ message: "Bạn không thể thêm tài khoản" },
                            :forbidden) unless current_shop_account.manager?

      service = Shops::CreateAccountService.call(account_params.merge(shop_id: current_shop.id))
      if service.success?
        response_success(service.shop_account, namespace: ::ShopManage)
      else
        response_error(service.message)
      end
    end
  end
end
