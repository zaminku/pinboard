# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  description :text
#  pin_url     :text
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_pins_on_user_id  (user_id)
#
require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
