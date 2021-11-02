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
    validates :user_id, :text, :pin_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :pin,
        foreign_key: :pin_id,
        class_name: :Pin
end
