# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_boards_on_user_id_and_name  (user_id,name) UNIQUE
#
class Board < ApplicationRecord
    validates :user_id, :name, presence: true
    validates :description, allow_blank: true, length: {maximum: 500}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
