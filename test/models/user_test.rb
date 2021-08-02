# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  bio             :string(160)
#  email           :string           not null
#  first_name      :string           not null
#  gender          :string
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_first_name     (first_name)
#  index_users_on_last_name      (last_name)
#  index_users_on_session_token  (session_token) UNIQUE
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
