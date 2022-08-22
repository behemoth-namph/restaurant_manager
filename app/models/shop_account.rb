class ShopAccount < ApplicationRecord
  attr_accessor :shop_code

  devise :database_authenticatable, :recoverable, :rememberable, :validatable, authentication_keys: [:phone, :shop_code]

  belongs_to :shop

  enum role: { general: 1, manager: 10 }

  delegate :code, to: :shop, prefix: true, allow_nil: true

  def active_for_authentication?
    super && shop.active?
  end

  def self.find_for_database_authentication(warden_conditions)
    joins(:shop).where(phone: warden_conditions[:phone], shops: { code: warden_conditions[:shop_code] }).first
  end

  def send_confirmation_notification?
    false
  end

  def email_required?
    false
  end

  def email_changed?
    false
  end

  def will_save_change_to_email?
    false
  end
end
