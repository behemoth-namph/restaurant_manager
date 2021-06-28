module ApplicationHelper
  def loading
    options = {
      ref: 'loading'
    }

    content_tag('loading', nil, options, false)
  end

  def shop_header_menu
    options = {
    }

    content_tag('header-menu', nil, options, false)
  end

  def footer
    options = {
    }

    content_tag('footer-index', nil, options, false)
  end

  def home_index
    options = {
    }

    content_tag('home-index', nil, options, false)
  end

  def shop_breadcrumb
    options = {
    }

    content_tag('breadcrumb', nil, options, false)
  end
end
