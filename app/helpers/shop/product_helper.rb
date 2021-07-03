module Shop
  module ProductHelper
    def product_index_helper
      options = {
      }

      content_tag('product-index', nil, options, false)
    end

    def product_detail_helper
      options = {
      }

      content_tag('product-detail', nil, options, false)
    end
  end
end
