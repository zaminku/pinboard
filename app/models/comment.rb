# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  text       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  pin_id     :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_comments_on_pin_id   (pin_id)
#  index_comments_on_user_id  (user_id)
#
class Comment < ApplicationRecord
end
