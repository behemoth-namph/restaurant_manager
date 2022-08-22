class ApplicationController < ActionController::Base
  def response_success(data = {}, **options)
    render({ json: data, status: :ok, **options })
  end

  def response_error(error = {}, status = :unprocessable_entity)
    render json: error, status: status
  end

  def response_not_found
    render json: { message: 'not found' }, status: :not_found
  end
end
