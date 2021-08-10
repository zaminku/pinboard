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
class Pin < ApplicationRecord
    validates :user_id, :title, presence: true
    validates :description, allow_blank: true, length: {maximum: 500}
    validate :ensure_photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :photo

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "must be attached"
        end
    end
end
