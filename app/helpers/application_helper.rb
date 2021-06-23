module ApplicationHelper
  def loading
    options = {
      ref: 'loading'
    }

    content_tag('loading', nil, options, false)
  end

  def sidebar(route)
    options = {
      ":route": route.to_json
    }

    content_tag('sidebar', nil, options, false)
  end

  def shop_header_menu
    options = {
    }

    content_tag('header-menu', nil, options, false)
  end
end
