require 'test_helper'

class Api::V1::CardsControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get api_v1_cards_search_url
    assert_response :success
  end

end
