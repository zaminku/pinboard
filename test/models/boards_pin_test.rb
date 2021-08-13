# == Schema Information
#
# Table name: boards_pins
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer          not null
#  pin_id     :integer          not null
#
# Indexes
#
#  index_boards_pins_on_pin_id_and_board_id  (pin_id,board_id) UNIQUE
#
require 'test_helper'

class BoardsPinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
