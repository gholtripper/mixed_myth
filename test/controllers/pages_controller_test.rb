require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  def setup
    @base_title = 'Mixed Myth'
  end

  test "should get home" do
    get :home
    assert_response :success
    assert_select 'title', 'Home | Mixed Myth'
  end
end
