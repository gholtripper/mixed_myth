require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  def setup
    @base_title = 'Mixed Myth'
  end

  test 'should get home' do
    get :home
    assert_response :success
    assert_select 'title', 'Mixed Myth'
  end

  test 'should get about' do
    get :about
    assert_response :success
    assert_select 'title', 'About | Mixed Myth'
  end
end
