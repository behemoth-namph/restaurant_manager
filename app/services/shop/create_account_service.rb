module Shop
  class CreateAccountService
    include Interactor

    def call
      arguments = context.to_h
      shop_account = ::ShopAccount.new(arguments)
      random_password = SecureRandom.urlsafe_base64(9) # Random password

      shop_account.password = random_password
      if shop_account.is_valid?
        # shop_account.skip_confirmation!
        shop_account.save!
        ShopMailer.register_success(arguments[:email], random_password, context.phone).deliver_now
      else
        context.fail!(message: shop_account.errors.to_hash(true))
      end
    end
  end
end
